# anh05.github.io

Author: DA Nguyen

Personal website of Duc Anh Nguyen, built with [Astro](https://astro.build) and served at <https://anh05.github.io>.

## Run locally

Requires Node.js 22. Astro 7 needs Node ≥ 22.22; a project-local Node (the `node` dev dependency) is used by the npm scripts, so an older global Node 22 also works.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check (astro check) + static build into dist/
npm run preview   # serve dist/
```

## Update content

All content is data; layouts do not need to change.

| What | Where |
| --- | --- |
| Name, headline, current role, summary, links, skills, languages | `src/data/profile.ts` |
| Experience | `src/content/experience.yaml` |
| Education | `src/content/education.yaml` |
| Publications (BibTeX is generated) | `src/content/publications.yaml` |
| Projects | `src/content/projects.yaml` |
| Teaching | `src/content/teaching.yaml` |
| Talks | `src/content/talks.yaml` |
| xAutoML case study text (and optional demo video) | `src/data/xautoml.ts` |
| xAutoML screenshots | `src/assets/xautoml/` (see its README) |
| Blog posts | `src/content/blog/*.md` (copy `_template.md`) |
| Photo | `src/assets/photo.png` |

Entries are validated against the schemas in `src/content.config.ts`, so `npm run build` fails on a missing or malformed field.

- `selected: true` on a publication / `featured: true` on a project shows it on the home page.
- The Blog link appears in the navigation once a post with `draft: false` exists.
- The Talks sections on `/cv` and Home appear once `talks.yaml` has an entry.
- A project with `caseStudy` links to that page instead of an external site.
- Place a PDF at `public/cv.pdf` to show a "Download PDF" link on `/cv`. It must not contain a phone number, street address or referee details.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages (Settings → Pages → Source: GitHub Actions).
