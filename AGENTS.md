# Agent Context: Quarto Project

This document provides technical context and specific instructions for AI agents (like GitHub Copilot) working within this repository.

## Project Overview

- **Project Name:** Quarto Personal Website
- **Owner:** @rifkiard (Rifki Ardiansyah)
- **Purpose:** A professional portfolio and dynamic blog engine for @rifkiard.
- **Tech Stack:** [Quarto](https://quarto.org/), Markdown (.qmd, .md), YAML, and CSS/SCSS.

## Home Page Requirements (`index.qmd`)

The home page must serve as a comprehensive professional landing page, showcasing:

1. **Professional Profile:** A concise "About Me" section highlighting 6+ years of software engineering experience.
2. **Professional Experience:** A structured timeline or list of career roles (e.g., AstraWorld, BoksMan).
3. **Education:** Academic background, including studies at University of the People.
4. **Certifications:** A dedicated section for technical certifications and credentials.

## Blog Functionality (`blog/` directory)

The blog section must support the following features:

1. **Categorization:** Every post must be categorized using the `categories` field in the YAML front-matter.
2. **Listing Page:** A main blog listing page (`blog/index.qmd`) that displays posts with dates, descriptions, and category tags.
3. **Searchability:** Enable Quarto's built-in search functionality (configured in `_quarto.yml`) to allow users to search through blog content.
4. **Filtering:** Support UI-based filtering by categories on the listing page.

## Coding Standards & Rules

1. **File Formats:** Use `.qmd` for dynamic content (including blog posts) and `.md` for static documentation.
2. **Metadata (Front-matter):** Every new blog post must include: `title`, `author`, `date`, `categories` (array), and `description`.
3. **Naming Convention:** Use **kebab-case** for filenames. Prefix internal partials with an underscore.
4. **Project Structure:**
   - `index.qmd`: Professional landing page.
   - `blog/index.qmd`: Blog listing page.
   - `blog/posts/`: Individual blog posts directory.
   - `assets/`: Images and static files.
   - `_quarto.yml`: Primary configuration (ensure `search: true` is enabled).

## Content & Tone Guidelines

- **Primary Language:** Professional English.
- **Tone:** Professional, clear, and expert-level.
- **Writing Style:** Write naturally and conversationally. Avoid AI-like patterns such as overly formal phrases, repetitive structures, or generic corporate language. Sound human, authentic, and direct.
- **Punctuation:** Use regular hyphens (-) instead of em dashes (—) or en dashes (–). Humans rarely use long dashes in natural writing.
- **Audience:** Global engineering community, technical recruiters, and collaborators.
- **No Emoji:** Do not use emoji characters anywhere — in headings, body text, tables, or front-matter. Use plain text or Markdown formatting instead.

## AI Instructions

- **Consistency:** Maintain a unified professional English voice across all portfolio and blog pages.
- **Automation:** When generating new blog posts, ensure the YAML front-matter includes descriptive categories and a concise summary for search optimization.
- **Theming:** Consult `_quarto.yml` for layout configurations, specifically the `listing` and `search` settings.
- **No Translation:** Always default to Professional English.

## Persona Context

- **Developer Profile:** @rifkiard is a Senior Software Engineer (6+ years) specialized in Vue/Nuxt and Node.js. Focus on technical depth and clean architecture in blog content.
