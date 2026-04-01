# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running

```bash
firefox label-maker.html
```

No build step, no server, no dependencies to install. The file is fully self-contained. Open in Firefox and use the browser's print function to produce labels.

## Architecture

This is a **single self-contained HTML file**. Everything — CSS, JS, label data, and inline SVG icons — lives in `label-maker.html`.

The app has two tabs:
- **Edit Labels** — data editor to manage label groups and individual labels (code, description, type, icon). Changes auto-save to `localStorage`. Import/Export via JSON.
- **Preview & Print** — dimension sliders + page preview rendered from the JS data, with a Print button.

Key architectural patterns:

- **CSS custom properties** (`--col-ac`, `--col-eth`, etc.) define the five cable-type colors. Labels inherit their color by referencing these variables.
- **Icon backgrounds** are MDI/Lucide SVG paths encoded as `background-image: url("data:image/svg+xml,...")` CSS tiles. Icon spacing is achieved by expanding the SVG `viewBox` (not `background-size`), so the rendered icon size stays fixed when the spacing slider changes. Icons are generated per type×icon combination in `update()` using CSS attribute selectors (`[data-icon="key"]`).
- **Live control panel** — all sliders regenerate a `<style id="dyn-style">` block via `update()`; no framework, no re-render cycle.
- **Print CSS** — `@page` rules are injected into `<head>` at print time so they reflect the current slider values (paper size, orientation).
- **Label structure** — each label is a flex row: `[color-bar] [face-1 text] [wrap-zone] [face-2 text (mirrored)] [color-bar]`. The wrap zone uses `overflow: hidden` with the icon background showing through.

## Label Data

Labels are defined in `DEFAULT_GROUPS` (JS constant) as an array of group objects. Each group has a `title` and `labels` array. Each label has `code`, `desc`, `type` (ac/dc/eth/fbr/sw), and `icon` (auto/none/ac/dc/eth/fbr/sw). Live data is stored in `labelGroups` and persisted to `localStorage` under key `labelmaker-v1`.

## Fonts

Oswald 700 (codes) and Barlow Condensed 800 (descriptions) load from Google Fonts on first open, then are cached by Firefox for offline use. For a fully offline setup, replace the `<link>` tag with local `@font-face` declarations pointing to downloaded `.ttf` files.
