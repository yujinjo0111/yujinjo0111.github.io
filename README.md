# Yujin Jo 

Static site (HTML + CSS + vanilla JS). No build step.

## Structure

```
index.html            page skeleton & menu
css/style.css         styles (light/dark, responsive)
js/data.js            ← all content: news, publications, research, education, activities
js/main.js            rendering, smooth scroll, active-menu highlight, mobile menu, dark mode
assets/img/           profile.jpg (add yours) and publication thumbnails
.nojekyll             tells GitHub Pages to serve files as-is
```

## Editing

- **Photo**: save a square image as `assets/img/profile.jpg`. Initials are shown until it exists.
- **Add a paper**: copy one object in `publications` in `js/data.js`, then set `image`, `title`,
  `authors`, `venue`, `year`, and `links.paper` / `links.code`. Links left empty are hidden.

## Preview locally

```bash
python3 -m http.server 8000
```

## Deploy to GitHub Pages

1. Create a repo named `<your-github-id>.github.io`.
2. Push the contents of this folder to its `main` branch root.
3. Settings → Pages → Source: *Deploy from a branch*, Branch: `main` / `(root)`.
4. The site is live at `https://<your-github-id>.github.io/` within a minute or two.
