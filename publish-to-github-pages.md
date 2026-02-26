# Publishing to GitHub Pages

This guide explains how to publish your Mikroökonomie learning app to GitHub Pages.

## Prerequisites

- Git repository hosted on GitHub
- Node.js and npm installed locally
- Repository pushed to GitHub

## Method 1: GitHub Actions (Recommended)

This method automatically builds and deploys your app whenever you push to the main branch.

### Step 1: Update Vite Configuration

Edit `vite.config.ts` to set the correct base path:

```typescript
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  // Set base to your repository name
  base: "/your-repo-name/", // e.g., '/mikro-lernapp/'
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
```

### Step 2: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml` in your project root:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main # or 'master' depending on your default branch

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "./dist"

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Save the settings

### Step 4: Deploy

Push your changes to GitHub:

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push
```

The workflow will automatically build and deploy your app. Check the **Actions** tab to monitor progress.

Your site will be available at: `https://your-username.github.io/your-repo-name/`

## Method 2: Manual Deployment with gh-pages

If you prefer manual deployments or don't want to use GitHub Actions:

### Step 1: Update Vite Configuration

Update `vite.config.ts` as shown in Method 1.

### Step 2: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 3: Add Deploy Script

Add this script to your `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "run-p type-check \"build-only {@}\" --",
    "preview": "vite preview",
    "build-only": "vite build",
    "type-check": "vue-tsc --build",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### Step 4: Deploy

Run the deploy command:

```bash
npm run deploy
```

### Step 5: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **gh-pages** and **/ (root)**
4. Save the settings

Your site will be available at: `https://your-username.github.io/your-repo-name/`

## Important Notes

### Vue Router Configuration

If you're using Vue Router in `history` mode, you may need to configure it for GitHub Pages:

```typescript
// router/index.ts
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // your routes
  ],
});
```

Alternatively, use `hash` mode which works without server configuration:

```typescript
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // your routes
  ],
});
```

### 404 Handling for History Mode

If using history mode, create a `public/404.html` that redirects to `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'" />
  </head>
  <body>
    Redirecting...
  </body>
</html>
```

### Local Testing

Test your production build locally before deploying:

```bash
npm run build
npm run preview
```

### Updating Deployment

- **Method 1 (GitHub Actions)**: Just push to your main branch
- **Method 2 (Manual)**: Run `npm run deploy` again

## Troubleshooting

**Assets not loading**: Make sure the `base` path in `vite.config.ts` matches your repository name exactly.

**Blank page**: Check the browser console for errors. Usually caused by incorrect base path.

**404 on refresh**: Configure hash mode or set up 404 handling as described above.

**Images missing**: Ensure all images are in the `public/` folder or imported in your components.
