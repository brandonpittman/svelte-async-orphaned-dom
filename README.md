# Orphaned DOM after a client-side remount under `experimental.async`

A page whose whole template is one child component reading a top-level `await` value is left in the DOM after navigating away, when the page was hydrated earlier, then mounted again by client-side navigation, then left for a route under a layout with a top-level `await`. It reproduces on a production build only (`vite dev` is clean).

Steps (the StackBlitz preview runs `npm run build && npm run preview`):

1. Load `/`.
2. Click **other**, then **home**.
3. Click **next**.

Expected: only "next page". Actual: "child of / (ready)" is still rendered above it.

Controls, all clean: `/inline` (same page with its own element), going from `/` straight to **next**, and starting the session at `/other` instead of `/`. Wrapping `<Child {value} />` in `src/routes/+page.svelte` in any element also fixes it.

`npm test` runs the same steps in Playwright (Chromium and WebKit).
