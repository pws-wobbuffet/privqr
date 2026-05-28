# privqr

**A QR code generator that never sees your data.**

Most QR generators send your URLs, WiFi passwords, and contact info through their servers. privqr doesn't. Everything happens in your browser: no server, no account, nothing uploaded.

🔗 **Live:** https://pws-wobbuffet.github.io/privqr/

## What it does

- Generate QR codes for **URL/text, WiFi credentials, vCard, geographic locations, email, SMS, and phone numbers**
- Customize **colors, dot/corner styles, and embed a logo** in the center
- Download as **PNG** or **SVG** (vector)
- Available in **English, Spanish, Portuguese, and French**
- 100% client-side: open the page, disconnect from the internet, it still works

## Why

Your WiFi password is yours. So is the URL of that draft Google Doc you're sharing at a meeting. They shouldn't pass through someone else's logs just because you wanted a QR code.

## Run locally

It's a static site. Any HTTP server works:

```bash
git clone https://github.com/pws-wobbuffet/privqr.git
cd privqr/docs
python3 -m http.server 8080
# open http://localhost:8080
```

Or just publish the `docs/` folder to any static host. There's no build step.

## Stack

- Vanilla HTML / CSS / JavaScript (ES modules)
- [`qr-code-styling`](https://github.com/kozakdenys/qr-code-styling) loaded from a CDN for QR rendering + logo embedding + PNG/SVG export
- Hosted on GitHub Pages from `/docs`

No dependencies to install. No tracking. No analytics.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). PRs welcome, especially translations.

## License

[MIT](./LICENSE)
