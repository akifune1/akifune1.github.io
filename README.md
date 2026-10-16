<p align="center">
  <img src="public/favicon.svg" alt="Kolby Hernandez monogram" width="64" height="64" />
</p>

# Kolby Hernandez — Portfolio

A personal portfolio for full-stack engineering, cybersecurity, and UI/UX design. Built with **React 18**, **Vite 6**, **vanilla CSS**, and **Lucide icons**.

The site brings together professional experience, software projects, technical skills, and certifications in a restrained editorial layout: cream and charcoal backgrounds, purple accents, Junicode headings, and Bricolage Grotesque body text.

[Visit the website](https://akifune1.github.io) · [Download the CV](public/KolbyHernandez_CV.pdf)

[Features](#features) · [Getting started](#getting-started) · [Customization](#customization) · [Verification](#verification) · [Deployment](#deployment) · [Credits](#credits)

## Features

- **Light and dark themes.** First visits start in cream light mode. Manual choices persist when browser storage is available and are restored before the app renders.
- **An animated introduction.** A centered name, themed hero scenery, direct contact/CV actions, and a pausable credential loop that includes UI/UX Design.
- **Repeatable scroll motion.** Heading wipes and varied section entrances replay on return visits, with reduced-motion alternatives.
- **Responsive navigation.** Paired desktop section rails, a compact header menu, and a bottom section index on smaller screens. Keyboard navigation includes visible focus and a skip link.
- **Directly readable evidence.** Experience, project details, skill groups, and certifications remain visible without opening carousels. Badges preserve their original colors and transparency, with verification links and copyable credential IDs.
- **Simple contact actions.** Email copying with success/failure feedback, professional profile links, and a downloadable CV.

## Getting started

Install [Node.js](https://nodejs.org/) **22 or later**, npm, and Git. The commands below check out the development branch containing the redesign.

```sh
git clone --branch dev https://github.com/akifune1/akifune1.github.io.git
cd akifune1.github.io
npm ci
npm run dev
```

Open the address printed by Vite, normally [http://localhost:3000](http://localhost:3000). The app is a static frontend; no backend service, API keys, or environment variables are required.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with hot reload. |
| `npm test` | Run the Node.js test suite. |
| `npm run build` | Build the production site into `dist/`. |
| `npm run preview` | Serve the existing production build locally. |

Run `npm run build` before `npm run preview`; use the preview URL printed in the terminal.

## Project structure

```text
.github/workflows/deploy.yml   GitHub Pages build and deployment
public/
  badges/                     Original certification artwork
  fonts/                      Self-hosted fonts and their licenses
  images/                     Light and dark hero backgrounds
  favicon.svg                 Portfolio monogram
  KolbyHernandez_CV.pdf        Downloadable CV
src/
  components/                 Page sections, navigation, and theme controls
  data/portfolioData.js       Identity, projects, skills, credentials, and experience
  hooks/                      Section tracking, scrolling, and motion lifecycle
  styles/                     Shared tokens and component styles
  App.jsx                     Page composition and section order
  main.jsx                    React entry point
tests/                        Theme bootstrap and scroll-motion tests
index.html                    Document metadata and early theme restoration
vite.config.js                Asset base, development server, and build settings
```

The mounted page follows **About → Experience → Projects → Skills → Certifications → Contact**. Earlier research, philosophy, terminal, and carousel components remain in the repository but are not mounted by `App.jsx`.

## Customization

| Change | Edit |
| --- | --- |
| Profile, social links, experience, projects, skills, or certifications | [src/data/portfolioData.js](src/data/portfolioData.js) |
| Hero summary and credential loop | [src/components/Hero.jsx](src/components/Hero.jsx) |
| Colors, type, shared spacing, and theme transition | [src/styles/index.css](src/styles/index.css) |
| Hero scenery and its fade/blur treatment | [src/styles/hero.css](src/styles/hero.css) and `public/images/hero_light.jpg` / `hero_dark.jpg` |
| Section order | [src/App.jsx](src/App.jsx) |
| Section navigation labels and destinations | [src/hooks/useActiveSection.js](src/hooks/useActiveSection.js) |
| Page title, description, favicon, and font preloads | [index.html](index.html) |
| Artwork credit | [src/components/Footer.jsx](src/components/Footer.jsx) |

Replace `public/KolbyHernandez_CV.pdf` to update the download while keeping its filename. When changing badge images, retain their native transparency; white lettering and panels are part of the artwork.

## Verification

```sh
npm test
npm run build
```

The tests use Node's built-in runner to check the actual theme bootstrap, default and saved preferences, blocked-storage fallback, motion definitions, and safe exit/re-entry playback. They do not require a browser.

Check both themes, narrow and wide layouts, keyboard navigation, reduced motion, repeated scrolling, the credential loop, clipboard actions, verification links, and CV access when reviewing changes.

## Deployment

[The GitHub Actions workflow](.github/workflows/deploy.yml) installs dependencies with `npm ci`, builds the site, and publishes `dist/` to GitHub Pages. It runs on pushes to `main` and supports manual dispatch.

> [!NOTE]
> Pushing to `dev` does not automatically deploy the website. Run the verification commands before merging into `main`; the deployment workflow currently runs the build without the test suite.

For a fork, select **GitHub Actions** as the repository's Pages source. Vite uses a relative asset base (`./`), and public asset references use `import.meta.env.BASE_URL` so the site can be hosted at a domain root or under a repository path.

## Credits

- **Hero backgrounds:** [furi / ふーり on Pixiv](https://www.pixiv.net/en/users/41736171), credited in the site's footer.
- **Typography:** Junicode and Bricolage Grotesque. Source links and the bundled font licenses are documented in [public/fonts/README.md](public/fonts/README.md).
- **Icons:** [Lucide](https://lucide.dev/), via `lucide-react`.
- **Portfolio:** [Kolby Hernandez (@akifune1)](https://github.com/akifune1).
