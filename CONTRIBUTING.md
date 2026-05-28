# Contributing to privqr

Thanks for considering a contribution. This is a hackathon project and stays intentionally small. The rules are:

1. **Solve a real problem.**
2. **Stay 100% free.**
3. **Run without a server.** Anything that requires a backend, telemetry, or third-party API call on the user's data is out of scope.

## Running locally

Pure static site. Any HTTP server works:

```bash
git clone https://github.com/pws-wobbuffet/privqr.git
cd privqr/docs
python3 -m http.server 8080
# open http://localhost:8080
```

`qr-code-styling` is loaded from a CDN via ES modules, so you need a real HTTP server (not `file://`).

## Opening a PR

1. Fork the repo and create a branch off `main`.
2. Keep the change small and focused. One PR per logical change.
3. Match the existing style: no framework, no build step, ES modules.
4. Open the PR against `main` with a short description of the problem and the fix.

## Adding a translation

The i18n strings live in `docs/app.js` under the `I18N` object. To add a language:

1. Add a new locale key (e.g. `de`) with translations of every existing string.
2. Add the language to the `<select>` in `docs/index.html`.
3. Test by switching to your locale and walking through every tab.

## Adding a new QR content type

1. Add an encoder function (e.g. `encodeBitcoin(state)` returning the raw QR payload string).
2. Add a tab button and a form panel in `docs/index.html`.
3. Wire the form inputs to update state in `docs/app.js`.
4. Translate the new strings in every locale.

## Reporting bugs

See [`.github/ISSUE_TEMPLATE/bug_report.md`](.github/ISSUE_TEMPLATE/bug_report.md). Please include browser + version.
