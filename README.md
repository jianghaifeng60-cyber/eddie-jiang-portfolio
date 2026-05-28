# Eddie Jiang Portfolio

High-end bilingual personal IP and portfolio website for Jiang Haifeng / Eddie Jiang.

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

## Content Notes

Images are stored in `public/assets/images`. Original source images are backed up in `public/assets/originals`.

Current CV and portfolio downloads are placeholders generated from available project information:

- `public/assets/documents/eddie-jiang-cv-preview.pdf`
- `public/assets/documents/portfolio-sample-fog-house.pptx`

Replace these with final uploaded CV and portfolio PDF files when available. Phone, WeChat and QQ are intentionally not exposed.

## Deploy To Vercel

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com/new).
3. Import the GitHub repository.
4. Framework Preset: `Vite`.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Deploy.

## Deploy To Netlify

1. Go to [Netlify](https://app.netlify.com/start).
2. Import the GitHub repository.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Deploy.

## Deploy To GitHub Pages

1. Install the GitHub Pages helper:

```bash
npm install -D gh-pages
```

2. Add these scripts to `package.json`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Deploy:

```bash
npm run deploy
```

For a repository subpath deployment, set Vite `base` in `vite.config.js` to `/<repository-name>/`.
