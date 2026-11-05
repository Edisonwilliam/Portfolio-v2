# GitHub Checklist for Edison William

> This file lives in `/docs/GITHUB-TODO.md` in your portfolio repo.
> Work through it once — it typically takes 1–2 hours total.

---

## 1. Pin Flagship Repositories

Go to **github.com/Edisonwilliam** → "Customize your pins" and pin exactly these 4–6 repos (in this order):

| Priority | Repo | Why |
|----------|------|-----|
| 1 | `DevTrack` | Full-stack, most complex, payments |
| 2 | `CampusConnect` | Multi-module, real use case |
| 3 | `Forme-living` | TypeScript + e-commerce end-to-end |
| 4 | `tableflow` | Auth + booking flow |
| 5 | `portfolio` | Shows you care about your own brand |
| 6 | (optional) `Artsy` | Next.js frontend work |

Unpin anything that is a tutorial, fork, or has zero commits.

---

## 2. Profile Bio

Edit your GitHub profile bio to read:

```
Full-Stack Developer · React, Next.js, Node.js, MongoDB
Built DevTrack, CampusConnect, TableFlow, Forme Living
Open to freelance and full-time roles
```

Add:
- **Website**: https://edisonportfoli.netlify.app
- **Location**: Nigeria
- **X (Twitter)**: @CodeEdison ← use this handle everywhere (not @edison or @codewithedison)

---

## 3. Profile README (github.com/Edisonwilliam/Edisonwilliam)

Create a repo named exactly `Edisonwilliam` (matches your username) and add a `README.md`.
GitHub will render it on your profile page.

```markdown
# Hi, I'm Edison William

Full-stack developer building complete web products — from the UI to the database and deployment.

**Current stack:** React · Next.js · TypeScript · Node.js · Express · MongoDB · PostgreSQL

**Selected projects:**
| Project | Stack | Live |
|---------|-------|------|
| [DevTrack](https://github.com/Edisonwilliam/DevTrack) | React, Node, MongoDB | [Live ↗](https://dev-track-olive-five.vercel.app/) |
| [CampusConnect](https://github.com/Edisonwilliam/CampusConnect) | React, Node, MongoDB | [Live ↗](https://campusconnect-omega-snowy.vercel.app/) |
| [TableFlow](https://github.com/Edisonwilliam/tableflow) | React, Node, MongoDB | [Live ↗](https://tableflowe.vercel.app/) |
| [Forme Living](https://github.com/Edisonwilliam/Forme-living) | React, TS, Node, MongoDB | [Live ↗](https://forme-living.vercel.app/) |

**Get in touch:** edisonobieowuo8@gmail.com · [Portfolio](https://edisonportfoli.netlify.app) · [LinkedIn](https://linkedin.com/in/edisonwilliam)
```

---

## 4. README Template (apply to each flagship repo)

Copy this template into each repo's `README.md`. Fill in the bracketed sections.

```markdown
# [Project Name]

> [One-line tagline — same as on the portfolio site]

[![Live Demo](https://img.shields.io/badge/Live-Demo-black?style=flat-square)](LIVE_URL)

## Screenshots

<!-- Add 1–2 screenshots. Drag images into the GitHub README editor to upload. -->
![Main screen](docs/screenshot-1.png)

## Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React / Next.js, TypeScript, Tailwind CSS |
| Backend | Node.js, Express |
| Database | MongoDB |
| Auth | [e.g. JWT / Google Sign-In] |
| Payments | [e.g. Paystack — TODO: confirm] |
| Deployment | Vercel |

## Features

- [Feature 1 — specific, not "modern tech stack"]
- [Feature 2]
- [Feature 3]

## Architecture

```
Client (React) → Express REST API → MongoDB
                ↘ Google OAuth (auth)
                ↘ [Payment provider] (checkout)
```

## Local setup

```bash
# Clone
git clone https://github.com/Edisonwilliam/[repo-name].git
cd [repo-name]

# Install
npm install

# Environment variables — copy .env.example and fill in values
cp .env.example .env

# Run dev server
npm run dev
```

## Environment variables

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret for signing JWTs |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID (if applicable) |
| `PAYMENT_SECRET_KEY` | Payment provider secret key (if applicable) |

## Licence

MIT
```

---

## 5. Per-repo checklist

For **each** of DevTrack, CampusConnect, TableFlow, Forme Living:

- [ ] README follows the template above
- [ ] At least 1 screenshot in `docs/` or linked in the README
- [ ] `.env.example` file (never commit real credentials)
- [ ] Live demo badge links to the correct Vercel URL
- [ ] Repository description (the one-liner under the repo name on GitHub) is set
- [ ] Repository topics set, e.g.: `react`, `nodejs`, `mongodb`, `express`, `full-stack`
- [ ] Default branch is `main`

---

## 6. What NOT to do

- Do not link to repos that do not exist — broken links hurt credibility
- Do not leave repositories with zero README or only the auto-generated placeholder
- Do not commit `.env` files with real credentials
- Do not use different handles across platforms — use `@CodeEdison` everywhere

