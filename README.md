# Wanderlust – Travel Recommendation Website

A JavaScript-based travel recommendation site with a Home page, About Us, Contact Us, navigation bar, and recommendations for beaches, temples, and countries (each with two images).

## Rubric checklist

- **GitHub repository public URL (1 pt)** — Use your repo’s `https://github.com/...` link.
- **Home, About Us, Contact Us (3 pts)** — `index.html`, `about.html`, `contact.html`.
- **Navigation bar (6 pts)** — Same nav on all pages; mobile toggle in `js/main.js`.
- **Home page introduction (1 pt)** — Hero section on `index.html`.
- **About Us elements (2 pts)** — Mission and “What we offer” on `about.html`.
- **Contact Us email form (1 pt)** — Form with email field on `contact.html`.
- **Beach recommendation, 2 images (2 pts)** — Section “Beach Recommendations” on Home.
- **Temple recommendation, 2 images (2 pts)** — Section “Temple Recommendations” on Home.
- **Recommendation by country, 2 images (2 pts)** — Section “Recommendations by Country” on Home.

## Run locally

Open `index.html` in a browser, or use a simple server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000` (or the port shown).

## Deploy to GitHub Pages

1. Create a new **public** repository on GitHub.
2. Push this project (e.g. `git init`, `git add .`, `git commit -m "Initial"`, `git remote add origin <repo-url>`, `git push -u origin main`).
3. In the repo: **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` (or `master`) → folder **/ (root)** → Save.
4. After a few minutes, your site will be at:  
   `https://<username>.github.io/<repo-name>/`

## Submission

- **Project title:** e.g. “Wanderlust – Travel Recommendation Website”
- **GitHub repository URL:** `https://github.com/<username>/<repo-name>`
- **Website URL:** `https://<username>.github.io/<repo-name>/`  
  (Always use `https://` or `http://` so the link works.)

Test the GitHub Pages URL in your browser before submitting.
