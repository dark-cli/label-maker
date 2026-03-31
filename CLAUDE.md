# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running

```bash
firefox "cable-labels(2).html"
```

No build step, no server, no dependencies to install. The file is fully self-contained. Open in Firefox and use the browser's print function to produce labels.

## Architecture

This is a **single self-contained HTML file**. Everything — CSS, JS, label data, and inline SVG icons — lives in `cable-labels(2).html`.

Key architectural patterns:

- **CSS custom properties** (`--col-ac`, `--col-eth`, etc.) define the five cable-type colors. Labels inherit their color by referencing these variables.
- **Icon backgrounds** are Lucide SVG paths encoded as `background-image: url("data:image/svg+xml,...")` CSS tiles. Icon spacing is achieved by expanding the SVG `viewBox` (not `background-size`), so the rendered icon size stays fixed when the spacing slider changes.
- **Live control panel** — all sliders write to CSS variables or inline styles via JS event listeners; no framework, no re-render cycle.
- **Print CSS** — `@page` rules and `@media print` styles are injected into `<head>` at print time so they reflect the current slider values (paper size, orientation, label dimensions).
- **Label structure** — each label is a flex row: `[color-bar] [face-1 text] [wrap-zone] [face-2 text (mirrored)] [color-bar]`. The wrap zone uses `overflow: hidden` with the icon background showing through.

## Label Data

Labels are defined as JS arrays/objects near the bottom of the `<script>` block, grouped by location (Rack / Roof Panel) and cable type (AC, DC, Ethernet, Fiber). There are 32 labels total. Each entry has a `code`, `desc`, and `type` field that maps to one of the five CSS color variables.

## Fonts

Oswald 700 (codes) and Barlow Condensed 800 (descriptions) load from Google Fonts on first open, then are cached by Firefox for offline use. For a fully offline setup, replace the `<link>` tag with local `@font-face` declarations pointing to downloaded `.ttf` files.
