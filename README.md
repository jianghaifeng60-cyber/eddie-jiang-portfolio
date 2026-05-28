# Eddie Jiang Portfolio

High-end bilingual personal IP and portfolio website for Jiang Haifeng / Eddie Jiang.

The site uses Eddie's real portfolio PDF, CV and lifestyle imagery. Visual direction: dark luxury, architectural grids, cinematic city light, snow scenes, editorial case-study layouts and quiet premium typography.

## Local Preview

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production Build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Main Assets

- Portfolio PDF: `public/assets/documents/eddie-jiang-portfolio.pdf`
- CV PDF: `public/assets/documents/eddie-jiang-cv.pdf`
- Personal imagery: `public/assets/portraits`
- Portfolio boards: `public/assets/portfolio-pages`

## Deploy To Vercel

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com/new).
3. Import the GitHub repository.
4. Framework Preset: `Vite`.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Deploy.

## Deploy To Netlify

1. Import the GitHub repository in Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Deploy.

## Deploy To GitHub Pages

Use Vercel first for the cleanest custom-domain and Vite workflow. GitHub Pages can also work by deploying the `dist/` folder with a pages action or `gh-pages`.
