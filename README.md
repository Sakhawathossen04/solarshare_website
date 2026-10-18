# SolarShare BD — Website

Professional multi-page static website for **SolarShare BD** — the community
solar trading and settlement network for Bangladesh. Bangla + English,
mobile-first, zero external frameworks (only system fonts). Designed as a
fresh alternative to powerpeers.nl — all content, branding, logo and assets
are original.

## Pages

| Page | Path | What's on it |
|---|---|---|
| Home | `/index.html` | Hero + live demo grid-price panel, 5-step flow, why-us cards, stats band, app split, CTA |
| How it works | `/how-it-works/` | Full pipeline explained: ingestion → validation → matching → settlement → app |
| App | `/app/` | Android APK (GitHub Actions) + iOS coming-soon, demo logins, feature grid |
| Pricing | `/pricing/` | Tariff tables (consumer ৳11, producer ৳9, other ৳1) + interactive settlement calculator |
| FAQ | `/faq/` | Accordion FAQs: trading, settlement, meter safety, regulations |
| Contact | `/contact/` | Demo contact form + who-to-talk-to cards |

## Features

- **বাংলা / English toggle** — every page, saved in localStorage
- **Grid motif design system** — subtle energy-grid line patterns in hero,
  stats band and panels; grid cards; step numbers
- **Live demo price panel** — simulated ৳/kWh grid prices refresh every 5s
- Settelment calculator (pricing page) — same math as the Flutter app:
  remaining = collection − producer payment − other costs (never shown as profit)
- Fully responsive, accessible markup (nav, FAQ accordion, focus styles)
- No build step, no dependencies — plain HTML/CSS/JS

## Run locally

```bash
cd solarshare_website
python -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub + Vercel)

1. Create a GitHub repo, push this whole `solarshare_website` folder
   (it's fully self-contained).
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset: **Other**. Root directory: whatever holds this folder
   (or move these files to repo root). No build command; output = `./`.
4. Deploy → done. Every push redeployes automatically.

A `vercel.json` is included (static site defaults + clean URLs), so zero
extra config is needed in the dashboard.

## Structure

```
solarshare_website/
├── index.html              # home
├── how-it-works/           # pipeline page
├── app/                    # download page
├── pricing/                # tariff + calculator
├── faq/                    # questions
├── contact/                # form
├── assets/
│   ├── css/style.css       # design system (grid motifs)
│   ├── js/main.js          # i18n, nav, live panel, forms
│   └── img/                # logo svg, favicon (original)
├── vercel.json
└── checks.py               # link/CSS/JS sanity checks
```

## Disclaimer

Prototype/demo. All figures are simulated. No utility meter bypass, no
unauthorised connections; real settlement requires approval under
Bangladesh regulations.
