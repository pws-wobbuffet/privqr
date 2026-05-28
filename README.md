<img src="https://raw.githubusercontent.com/pws-wobbuffet/privqr/main/public/logo.svg" alt="privqr" height="72" />

**A QR code generator that never sees your data.**

Most QR generators send your URLs, WiFi passwords, and contact info through their servers. privqr doesn't. Everything happens in your browser: no server, no account, nothing uploaded.

🔗 **Live:** https://pws-wobbuffet.github.io/privqr/

## What it does

- Generate QR codes for **URL/text, WiFi credentials, vCard, geographic locations, email, SMS, and phone numbers**
- Customize **colors, dot/corner styles, and embed a logo** in the center
- Download as **PNG** or **SVG** (vector)
- Available in **English, Spanish, Portuguese, and French** — auto-detected from your browser
- 100% client-side: open the page, disconnect from the internet, it still works

## Why

Your WiFi password is yours. So is the URL of that draft Google Doc you're sharing at a meeting. They shouldn't pass through someone else's logs just because you wanted a QR code.

## Run locally

```bash
git clone https://github.com/pws-wobbuffet/privqr.git
cd privqr
pnpm install
pnpm dev
# open http://localhost:4321/privqr/
```

## Stack

- [Astro](https://astro.build) + [React](https://react.dev) — build-time bundling, no runtime transpiler
- [`qr-code-styling`](https://github.com/kozakdenys/qr-code-styling) for QR rendering, logo embedding, and PNG/SVG export
- Deployed to GitHub Pages via GitHub Actions

No tracking. No analytics. No backend.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). PRs welcome, especially translations.

## License

[MIT](./LICENSE)
