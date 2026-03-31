# Cable Label System
### Rack & Roof Panel — Printable Wrap-Around Labels

---

## What This Is

A single self-contained HTML file that generates printable wrap-around cable labels for a home network rack and roof distribution panel. No server, no framework, no install. Open in Firefox and print.

The project was designed around a specific home ISP/network setup in Basra, Iraq, where the operator runs a small neighborhood distribution network alongside a home inverter/solar power system.

---

## The Physical Setup

### Rack (Indoor)

The rack is the central hub. It contains:

- **Power system** — Main AC input, an inverter for backup/solar power, and a relay that normally runs from the inverter and falls back to main AC when the inverter is disconnected for maintenance. A separate AC charging line feeds the inverter from the main grid.
- **Main network switch** — Connects to all distribution points via fiber or ethernet.
- **ISP fiber input** — Incoming fiber from Awall ISP.

### Roof Panel (Outdoor)

A separate panel on the roof contains:

- **AC-to-DC 24V transformer** — Powered from the rack via AC cable, feeds the PoE patch panel.
- **PoE patch panel** — Provides 24V passive PoE to the wireless sectors and switches.
- **Sector switch (PANEL-SW-SECT)** — Connects the three wireless sector radios (H1, H2, H3) and two wired users (0017, 0020). Uplinks back to the rack via fiber.
- **Home switch (PANEL-SW-HOME)** — Connects the home apartments (Sara, Mohamed, Rada) via standard ethernet. Uplinks back to the rack via ethernet.
- **3× Wireless sector radios (H1, H2, H3)** — Not switches. These are wireless transmission devices (like Ubiquiti airMAX sectors) that distribute internet to neighborhood distribution switches A, B, and F, which are scattered across the neighborhood.

### Neighborhood Distribution

Distribution switches A, B, and F are located at various points in the neighborhood. Each one is a main switch that branches to other switches serving houses. They receive both power (AC) and connectivity (fiber) from the rack.

---

## Label System

### Naming Convention

Labels follow a structured code format:

```
[TYPE]-[DIRECTION/CONTEXT]-[DESTINATION]
```

Examples:
- `AC-CHG-IN` — AC power in, charging line to inverter
- `ETH-DIST-ROOF` — Ethernet to roof panel main switch
- `FBR-DIST-A` — Fiber to distribution switch A
- `SW-SECT-H1` — Sector switch port, sector H1

### Cable Categories & Colors

| Category | Color | Icon | Description |
|---|---|---|---|
| AC Power | 🔴 Red | `triangle-alert` | Mains AC — hazard warning |
| DC Power | 🟠 Orange | `battery-charging` | 24V DC from transformer |
| Ethernet | 🔵 Blue | `ethernet-port` | Standard ethernet cables |
| Fiber | 🟡 Gold | `cable` | Single-mode fiber patch cables |

Each label has a color bar on the left edge (face 1) and right edge (face 2), plus a subtle tiled icon background pattern that reinforces the cable type at a glance.

### Label Physical Format

Wrap-around cable labels — the sticker wraps around the cable so it can be read from any direction. Each label has:

```
┌─────────────────────┬──────────┬─────────────────────┐
│  CODE               │ ░░░░░░░░ │  CODE               │
│  Description text   │ ░ wrap ░ │  Description text   │
└─────────────────────┴──────────┴─────────────────────┘
      Face 1            Wire gap       Face 2 (mirror)
```

The wrap zone is transparent so the icon background pattern shows through continuously across the full label.

---

## Complete Label List

### Rack — AC Power (9 labels)

| Code | Description |
|---|---|
| `AC-CHG-IN` | Power In · Main to Inverter Charge |
| `AC-INV-OUT` | Power Out · Inverter Output |
| `AC-MAIN-BKUP` | Power In · Main Backup Line |
| `AC-OUT-RACK` | Power Out · To Rack |
| `AC-OUT-ROOM` | Power Out · To Room |
| `AC-OUT-DIST-ROOF` | Power Out · To Roof Panel |
| `AC-OUT-DIST-A` | Power Out · To Dist. Switch A |
| `AC-OUT-DIST-B` | Power Out · To Dist. Switch B |
| `AC-OUT-DIST-F` | Power Out · To Dist. Switch F |

### Rack — DC Power (1 label)

| Code | Description |
|---|---|
| `DC24-OUT-POE` | DC 24V · To PoE Panel |

### Rack — Ethernet (4 labels)

| Code | Description |
|---|---|
| `ETH-ROOM` | Ethernet · To Room |
| `ETH-DIST-ROOF` | Ethernet · To Roof Home Switch |
| `ETH-DIST-HOME` | Ethernet · From Roof Home Switch |
| `ETH-AHMED` | Ethernet · To Ahmed Home |

### Rack — Ethernet with PoE — Sector cables (8 labels)

| Code | Description |
|---|---|
| `ETH-POE-H1` | Ethernet+PoE · Sector H1 |
| `ETH-POE-H2` | Ethernet+PoE · Sector H2 |
| `ETH-POE-H3` | Ethernet+PoE · Sector H3 |
| `ETH-SW-SECT` | Ethernet+PoE · To Sector Switch |
| `ETH-SW-HOME` | Ethernet+PoE · To Home Switch |
| `SW-SECT-0017` | Ethernet+PoE · User 0017 |
| `SW-SECT-0020` | Ethernet+PoE · User 0020 |
| `SW-SECT-UPLINK` | Fiber Uplink · To Rack |

### Rack — Fiber (5 labels)

| Code | Description |
|---|---|
| `FBR-DIST-ROOF` | Fiber · To Roof Sector Switch |
| `FBR-DIST-A` | Fiber · To Dist. Switch A |
| `FBR-DIST-B` | Fiber · To Dist. Switch B |
| `FBR-DIST-F` | Fiber · To Dist. Switch F |
| `FBR-ISP` | Fiber · From ISP (Awall) |

### Roof Panel — AC Power (1 label)

| Code | Description |
|---|---|
| `AC-IN-RACK` | Power In · From Rack |

### Roof Panel — Home Switch (4 labels)

| Code | Description |
|---|---|
| `SW-HOME-SARA` | Ethernet · Sara |
| `SW-HOME-MOHAMED` | Ethernet · Mohamed |
| `SW-HOME-RADA` | Ethernet · Rada |
| `SW-HOME-UPLINK` | Ethernet Uplink · To Rack |

**Total: 32 labels**

---

## The HTML File — Features

### Live Settings Panel (screen only, hidden on print)

All parameters update the preview in real time via a sticky control panel at the top:

| Group | Controls |
|---|---|
| Icon Background | Opacity (0–100%), Icon Size (2–22mm), Spacing between tiles (0–12mm) |
| Font Size | Code font (4–18pt), Description font (3–14pt) |
| Label Height | Data cables height, Power cables height |
| Label Width | Face width, Wrap zone width, Color bar width |
| Page / Print | Paper size selector, Orientation selector |

### Page Preview

The white label area on screen resizes live to match the selected paper size and orientation, so you can see how labels will fill the page before printing.

### Supported Paper Sizes

A4, A3, A5, US Letter, US Legal, B4, B5 — portrait or landscape.

### Fonts

- **Oswald 700** — label codes (bold condensed, designed for readability at small sizes and bad print conditions)
- **Barlow Condensed 800** — label descriptions

Fonts load from Google Fonts CDN. After first load they are cached by Firefox and work offline. For full offline use, download the `.ttf` files from fonts.google.com and replace the `<link>` tag with local `@font-face` declarations.

### Icons

Exact SVG path data from the [Lucide](https://lucide.dev) icon library, embedded inline — no network request needed at render time. Icons are encoded as SVG data URLs and used as CSS `background-image` tiles.

Icon spacing is implemented by expanding the SVG `viewBox` rather than changing `background-size`, so the icon render size stays fixed when you move the spacing slider.

---

## Running Locally

```bash
# Just open in Firefox — no server needed
firefox ~/projects/cable-labels/cable-labels.html

# Or from file manager — double click
```

### File Structure

```
cable-labels/
├── cable-labels.html   # Everything — self-contained
└── README.md           # This file
```

---

## Current State & Known Issues

### Working
- All 32 labels render correctly with colors, icons, and text
- Live settings panel updates preview in real time
- Page size preview resizes the white canvas to match selected paper
- Print button works in Firefox (uses `@page` CSS injected into `<head>`)
- Wrap zone is transparent — icon background shows through continuously
- Spacing slider correctly separates icon tiles without changing icon size
- Text wraps to second line instead of clipping when it reaches the face edge

### Known Limitations / To Do
- **Icon quality** — Icons are Lucide stroke-based SVGs. They look clean on screen but at very small sizes (under 4mm) the detail may be too fine for some printers. Increasing icon size or opacity compensates.
- **Font offline** — Requires internet on first open for Google Fonts to load. After that, Firefox caches them. For a fully offline setup, fonts need to be embedded locally.
- **No QR codes yet** — Was discussed as an option to encode extended cable information into a QR code on each label. Not yet implemented.
- **Label count per page not calculated** — The preview shows the page boundary but doesn't tell you how many labels fit or paginate them automatically.
- **Sticker size not finalized** — Heights of 10mm (data) and 10mm (power) are current defaults but the actual sticker stock size has not been confirmed yet. The sliders exist to dial this in before printing.

---

## Design Decisions & Rationale

**Why wrap-around labels?** Cables in a rack get moved, bundled, and rotated. A label that wraps around reads correctly from any angle.

**Why two faces?** When the label is wrapped around a cable, face 1 faces one direction and face 2 faces the other. Mirroring ensures it's readable regardless of which way the cable hangs.

**Why separate power heights?** Power cables (AC/DC) are physically thicker than ethernet and fiber patch cables, so they need a taller wrap zone. The height slider lets you dial this in per cable type.

**Why color bars instead of full color backgrounds?** Full color backgrounds make text harder to read, especially on lower-quality printers. Narrow color bars on each edge give instant category recognition without sacrificing text legibility.

**Why icon backgrounds at low opacity?** The tiled icon pattern reinforces cable type visually when you glance at a bundle of cables, but stays light enough that the bold code text reads clearly on top.
