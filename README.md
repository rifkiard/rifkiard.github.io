# Rifki Ardiansyah - Personal Website

Professional portfolio and blog built with [Quarto](https://quarto.org/).

## Live Site

Visit: [rifkiard.github.io](https://rifkiard.github.io)

## Setup Instructions

### GitHub Pages Configuration

To enable GitHub Pages for this repository:

1. Go to your repository settings: `https://github.com/rifkiard/rifkiard.github.io/settings/pages`
2. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` and `/ (root)` folder
   - Click "Save"

After pushing changes to the `main` branch, the GitHub Actions workflow will:
1. Build the Quarto site
2. Deploy the built files to the `gh-pages` branch
3. GitHub Pages will serve the site from the `gh-pages` branch

## Local Development

### Prerequisites

- [Quarto](https://quarto.org/docs/get-started/) installed locally

### Commands

```bash
# Preview the site locally
quarto preview

# Build the site
quarto render

# The built site will be in the _site/ directory
```

## Project Structure

```
.
├── _quarto.yml           # Quarto configuration
├── index.qmd            # Home page
├── cv.qmd               # CV page
├── blog/
│   ├── index.qmd        # Blog listing page
│   └── posts/           # Blog posts
├── assets/              # Images and styles
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Actions deployment
```

## Writing Blog Posts

1. Create a new `.qmd` file in `blog/posts/`
2. Add front-matter with required fields:

```yaml
---
title: "Your Post Title"
author: "Rifki Ardiansyah"
date: "2026-01-15"
categories: [technology, software]
description: "A brief description of your post"
---
```

3. Write your content in Markdown
4. Commit and push to trigger automatic deployment

## Tech Stack

- **Static Site Generator**: Quarto
- **Deployment**: GitHub Actions + GitHub Pages
- **Styling**: Bootstrap with custom SCSS
- **Content**: Markdown (.qmd files)

## License

© 2026 Rifki Ardiansyah. All rights reserved.
