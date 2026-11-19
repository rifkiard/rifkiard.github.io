# Rifki Ardiansyah, Personal Site

Static personal site with a root chooser and two sections:

- `/` shows two paths: Software Engineer and Product Model.
- `/software-engineer/` is the software engineering profile.
- `/product-model/` is the product model and UGC portfolio.

The site is built with plain HTML and CSS, plus a small amount of vanilla JavaScript for the mobile menu, the comp card toggle and print actions. There is no framework, no build step, no package manager and no backend. It is ready for GitHub Pages.

## Run locally

From the repository root:

```bash
python3 -m http.server 4173
```

Open:

- http://localhost:4173/
- http://localhost:4173/product-model/
- http://localhost:4173/software-engineer/

## File structure

```
.
├── index.html
├── styles.css
├── favicon.svg
├── product-model/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/
│       ├── favicon.svg
│       └── images/
│           ├── me.jpg
│           └── og.jpg
├── software-engineer/
│   ├── index.html
│   ├── styles.css
│   └── assets/
│       ├── favicon.svg
│       └── images/
│           ├── profile.jpg
│           └── og.jpg
├── CNAME
├── robots.txt
├── sitemap.xml
└── README.md
```

The root page only links to the software and product sections. The planned `/badminton/` section can be added as another sibling folder later. Both subpages include a Home link back to the chooser.

## Product model page

**URL:** `https://rifkiardiansyah.my.id/product-model/`

This is a digital comp card and first portfolio. It uses one photo file everywhere: `product-model/assets/images/me.jpg`. The hero, comp card, portfolio feature and print sheet share that same image and use CSS crops.

- The hero is a square crop with a warm monochrome treatment.
- The comp card is a 4:5 monochrome crop.
- The portfolio feature is a 4:5 colour crop.
- `og.jpg` is a 1200 × 630 social card made from the same portrait.

The current measurements are:

| Item | Value |
| --- | --- |
| Height | 165 cm / 5′5″ |
| Weight | 50 kg / 110 lb |
| Shoe | 41 EU / 8 US |
| Hair | Black |
| Eyes | Dark brown |
| Tops | M |
| Chest, waist, hips, trousers | Available on request |

Chest, waist, hips and trouser size were not provided. When they are available, add them to `.spec-grid` in `product-model/index.html` and to the `.print-sheet` at the bottom of the same file. Use the existing `data-cm` and `data-in` pattern. Remove `.comp-measure-note` and `.print-note` once every measurement is filled in.

Other product model details:

- Base: Jakarta, Indonesia
- Languages: Bahasa Indonesia and English
- Travel: passport ready, available for travel
- Availability: available now
- Instagram: [@071019021001_](https://www.instagram.com/071019021001_/)
- Contact: WhatsApp only, +62 822-2006-0066

There is no contact form and no public rate card. All product model CTAs open WhatsApp with a prefilled message. The header, package cards, portfolio CTA, About CTA, contact panel and footer use that number. To change it, search `product-model/index.html` for `6282220060066` and update the links, the visible number, the JSON-LD `telephone` and the print sheet.

The photo is an event image from Rifki's archive. Confirm permission to use it publicly and add a photographer or event credit if needed. Replace `me.jpg` with the same filename if a better crop becomes available, and update the alt text.

## Software engineer page

**URL:** `https://rifkiardiansyah.my.id/software-engineer/`

The software page uses the real CV data from the existing `rifkiardiansyah.my.id` profile:

- Senior Software Engineer at PT Astra International Tbk-AstraWorld, March 2024 to present.
- Six years of experience across automotive, logistics, finance and marketplaces.
- Previous roles at BoksMan, Berkat Warisan Nusantara, Kisah Cinta Anak Bangsa, JavaMifi, Bumi Daya Plaza and Megonesia.
- Ventures: Undangly, Wotaly, Mekasir and Muvenz. Wotaly reached 15,000 users in two months.
- Skills including Go, Node.js, Flutter, Vue, PostgreSQL, Redis, Alibaba Cloud and Azure DevOps.
- Education at the University of the People, expected November 2026, and SMK Negeri 4 Kota Bekasi.
- Contact: rifkiardiansyah670@gmail.com, LinkedIn and GitHub.

The profile photo at `software-engineer/assets/images/profile.jpg` is the GitHub avatar used as a temporary placeholder. Replace that file with the separate photo planned for this page. It is displayed as a square. If the photo changes, regenerate `software-engineer/assets/images/og.jpg` or replace it with a new 1200 × 630 image.

The software page has no contact form. It uses email, LinkedIn and GitHub links. A small inline script closes the mobile menu after a link is selected. Everything else is HTML and CSS.

## Deployment

The live site is deployed with GitHub Pages from the **`personal-branding`** branch:

```
Repository: rifkiard/rifkiard.github.io
Live URL:   https://rifkiardiansyah.my.id/
Branch:     personal-branding
Path:       /
Domain:     rifkiardiansyah.my.id
```

The previous Quarto site remains preserved on the `main` branch. The `main` branch is no longer the live source; make future site changes on `personal-branding`.

The custom domain is configured in GitHub Pages and also stored in the root `CNAME` file. HTTPS enforcement is enabled.

The section URLs are reflected in the canonical tags, Open Graph tags, JSON-LD and `sitemap.xml`. If you move a section to a different path or domain, update those absolute URLs in that section's `index.html`.

The root sitemap currently lists all three pages:

- `/`
- `/product-model/`
- `/software-engineer/`

Add `/badminton/` when that page is ready.

The root also contains `robots.txt`, `.nojekyll` and the `CNAME`. Keep them at the repository root.

## Cache busting

The CSS, JavaScript and images use a `?v=20261119e` query string. When you replace an image or change CSS or JavaScript on a deployed site, bump that version in the relevant `index.html` file so browsers load the new files.

## Accessibility and performance

- Semantic headings, landmarks and a skip link.
- Keyboard-accessible navigation, links and contact actions.
- Visible focus styles.
- Descriptive alt text.
- No web fonts required for layout; the Google Fonts links have system fallbacks.
- One shared photo file on the product page.
- Responsive layouts for mobile, tablet and desktop.

## Pre-launch checklist

- [ ] Add chest, waist, hips and trouser measurements when available.
- [ ] Confirm photo usage rights and add a photographer or event credit if needed.
- [ ] Replace the software profile photo and regenerate its social card.
- [ ] Add `/badminton/` when ready and update `sitemap.xml`.
- [ ] Verify the live Pages deployment after each push to `personal-branding`.
- [ ] Confirm the Instagram handle and the WhatsApp number.
- [ ] Review the package inclusions and availability.
- [ ] Test the comp card print flow in Chrome and Safari.
- [ ] Test every WhatsApp, email, LinkedIn and GitHub link.
- [ ] Run a final mobile and accessibility check.
