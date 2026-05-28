param(
  [string]$Repository = "jianghaifeng60-cyber/eddie-jiang-portfolio",
  [string]$Branch = "main"
)

$ErrorActionPreference = "Stop"

$ProjectRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$Token = Read-Host "Paste GitHub token"

if ([string]::IsNullOrWhiteSpace($Token)) {
  throw "Token is empty."
}

$Headers = @{
  Authorization = "Bearer $Token"
  Accept = "application/vnd.github+json"
  "X-GitHub-Api-Version" = "2022-11-28"
  "User-Agent" = "eddie-portfolio-push"
}

function Invoke-GitHubApi {
  param(
    [string]$Method,
    [string]$Path,
    $Body = $null,
    [switch]$AllowNotFound
  )

  $Uri = "https://api.github.com$Path"
  try {
    if ($null -eq $Body) {
      return Invoke-RestMethod -Method $Method -Uri $Uri -Headers $Headers
    }

    $Json = $Body | ConvertTo-Json -Depth 20 -Compress
    return Invoke-RestMethod -Method $Method -Uri $Uri -Headers $Headers -Body $Json -ContentType "application/json"
  } catch {
    if ($AllowNotFound -and $null -ne $_.Exception.Response) {
      $StatusCode = $_.Exception.Response.StatusCode.value__
      if ($StatusCode -eq 404 -or $StatusCode -eq 409) {
        return $null
      }
    }
    throw
  }
}

function New-Base64 {
  param([string]$Text)
  return [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($Text))
}

$IgnoreDirectories = @("node_modules", "dist", "preview-screenshots", "source-new", "extracted", "originals", "images")
$IgnoreFiles = @("dev-server.out.log", "dev-server.err.log", "eddie-jiang-cv-preview.pdf", "portfolio-sample-fog-house.pdf", "portfolio-sample-fog-house.pptx", "portfolio-contact-sheet.jpg", "portrait-contact-sheet.jpg")

$Files = Get-ChildItem -Path $ProjectRoot -Recurse -File | Where-Object {
  $Relative = $_.FullName.Substring($ProjectRoot.Length + 1)
  $Parts = $Relative -split "[\\/]"
  -not ($Parts | Where-Object { $IgnoreDirectories -contains $_ }) -and
  -not ($IgnoreFiles -contains $_.Name)
}

Write-Host "Preparing $($Files.Count) files for $Repository..."
Invoke-GitHubApi -Method "GET" -Path "/repos/$Repository" | Out-Null

$ExistingRef = Invoke-GitHubApi -Method "GET" -Path "/repos/$Repository/git/ref/heads/$Branch" -AllowNotFound

if ($null -eq $ExistingRef) {
  Write-Host "Repository is empty. Creating first commit..."
  Invoke-GitHubApi -Method "PUT" -Path "/repos/$Repository/contents/.gitignore" -Body @{
    message = "Initialize repository"
    content = New-Base64 "node_modules`ndist`n.DS_Store`n*.log`n.env`npreview-screenshots`n"
    branch = $Branch
  } | Out-Null
  $ExistingRef = Invoke-GitHubApi -Method "GET" -Path "/repos/$Repository/git/ref/heads/$Branch"
}

$Tree = @()
$Index = 0

foreach ($File in $Files) {
  $Index += 1
  $RelativePath = $File.FullName.Substring($ProjectRoot.Length + 1).Replace("\", "/")
  $Bytes = [System.IO.File]::ReadAllBytes($File.FullName)
  $Content = [Convert]::ToBase64String($Bytes)
  $Blob = Invoke-GitHubApi -Method "POST" -Path "/repos/$Repository/git/blobs" -Body @{
    content = $Content
    encoding = "base64"
  }

  $Tree += @{
    path = $RelativePath
    mode = "100644"
    type = "blob"
    sha = $Blob.sha
  }

  if ($Index % 10 -eq 0) {
    Write-Host "Uploaded $Index / $($Files.Count)"
  }
}

$TreeObject = Invoke-GitHubApi -Method "POST" -Path "/repos/$Repository/git/trees" -Body @{
  tree = $Tree
}
$Commit = Invoke-GitHubApi -Method "POST" -Path "/repos/$Repository/git/commits" -Body @{
  message = "Update portfolio website"
  tree = $TreeObject.sha
  parents = @($ExistingRef.object.sha)
}
Invoke-GitHubApi -Method "PATCH" -Path "/repos/$Repository/git/refs/heads/$Branch" -Body @{
  sha = $Commit.sha
  force = $false
} | Out-Null

Write-Host "Push complete."
Write-Host "Commit: $($Commit.sha)"
Write-Host "Repository: https://github.com/$Repository"
