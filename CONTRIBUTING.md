# Contributing to privqr

Thanks for considering a contribution. This is a hackathon project and stays intentionally small. The rules are:

1. **Solve a real problem.**
2. **Stay 100% free.**
3. **Run without a server.** Anything that requires a backend, telemetry, or third-party API call on the user's data is out of scope.

## Running locally

```bash
git clone https://github.com/pws-wobbuffet/privqr.git
cd privqr
pnpm install
pnpm dev
# open http://localhost:4321/privqr/
```

## Project structure

```
src/
  pages/index.astro       # HTML shell (head, fonts, meta)
  components/
    App.jsx               # Main React app
    Wordmark.jsx          # "privqr" logo with QR-block glyph
    Icons.jsx             # SVG icon set
    TweaksPanel.jsx       # Floating design-tweaks panel
    ContentForms.jsx      # Per-type QR input forms
  lib/
    i18n.js               # Translations (EN/ES/PT/FR) + useI18n hook
    qr-engine.js          # QR payload encoders + qr-code-styling config
  styles/global.css       # All CSS
public/
  favicon.svg
  logo.svg
```

## Opening a PR

1. Fork the repo and create a branch off `main`.
2. Keep the change small and focused. One PR per logical change.
3. No build step is required before opening a PR. GitHub Actions builds automatically on push.
4. Open the PR against `main` with a short description of the problem and the fix.

## Adding a translation

The i18n strings live in `src/lib/i18n.js` in the `STRINGS` object. To add a language:

1. Add a new locale key (e.g. `de`) with translations of every existing key.
2. Add the language to `LANGS` at the top of `src/lib/i18n.js`.
3. Update `detectLang()` to detect the browser locale.
4. Test by cycling through languages with the language toggle.

## Adding a new QR content type

1. Add an encoder to `buildPayload()` in `src/lib/qr-engine.js`.
2. Add a form component to `src/components/ContentForms.jsx` and register it in `CONTENT_FORMS`.
3. Add an entry to `TYPES` in `src/components/App.jsx`.
4. Add the `type_*` and `label_*` translation keys to every locale in `src/lib/i18n.js`.

## Reporting bugs

See [`.github/ISSUE_TEMPLATE/bug_report.md`](.github/ISSUE_TEMPLATE/bug_report.md). Please include browser + version.
