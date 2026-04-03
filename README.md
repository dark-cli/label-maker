# 🏷️ Label Maker

A fully-featured web application for creating, managing, and printing professional cable and equipment labels with QR codes. All data is stored locally in your browser and synced to GitHub for backup and short URL generation.

**Live Demo:** https://github.com/dark-cli/label-maker

---

## ✨ Features

### Core Features
- **Fully Self-Contained** — Single HTML file, no build step, no dependencies (except QRious for QR codes)
- **No Server Required** — Works completely offline once loaded
- **Local Storage** — All changes auto-save to browser localStorage
- **Import/Export** — Save and load label data as JSON
- **CSV Import** — Bulk import labels from spreadsheets
- **Print Ready** — Generate perfectly formatted labels for printing

### Label Management
- **Create Labels** — Code, description, type (AC/DC/Ethernet/Fiber/Switch), and QR data
- **Organize Groups** — Group related labels together (e.g., "Main Rack", "Distribution Panel")
- **Edit Live Preview** — Click any label to edit inline with live preview
- **Duplicate Labels & Groups** — Clone with one click
- **Search & Filter** — Find labels by code or description in real-time
- **Label Thumbnails** — See a live preview of each label in the editor table

### Customization
- **5 Built-in Types** — AC Power, DC Power, Ethernet, Fiber, Switch (customizable colors and icons)
- **Color Picker** — Visual color selector for type definitions
- **NerdFont Icons** — Over 3,000 icons available for each type
- **Adjustable Dimensions** — Control label width, height, wrap zone, color bars
- **Typography Control** — Customize code and description font sizes
- **Icon Sizing** — Adjust icon size, spacing, and opacity

### Visibility Toggles
Hide/show any element on all labels:
- ✓ Two-Face Layout (single vs. double-sided labels)
- ✓ Color Border (left/right colored bars)
- ✓ Wrap Zone (center section with diagonal stripes)
- ✓ Code Text (label codes)
- ✓ Description Text
- ✓ QR Codes

### QR Code Features
- **GitHub-Hosted Text** — Each QR code points to a text file on GitHub with the label description
- **Short URLs** — QR codes use short GitHub Pages redirects (46% shorter than raw.githubusercontent URLs)
- **Hover Tooltip** — Hover over any QR code to see a larger preview + raw text
- **Click to Edit** — Click any label in preview to edit it inline
- **Auto-Generated** — QR files created automatically from label descriptions

### Printing & Layout
- **Page Setup** — Choose paper size (A3, A4, A5, Letter, Legal, B4, B5)
- **Orientation** — Portrait or landscape
- **Page Preview** — See exactly what will print, with page break indicators
- **Print Button** — One-click printing with optimized print CSS
- **Break Avoidance** — Labels don't break across pages

### Keyboard Shortcuts
- `Ctrl+F` — Focus search box
- `Ctrl+N` — Add new label to last group
- `Ctrl+G` — Add new group
- `Ctrl+E` — Switch to Edit Labels tab
- `Ctrl+P` — Switch to Preview & Print tab
- `Ctrl+Shift+P` — Trigger print dialog
- `Escape` — Close any popup or tooltip

### Drag & Drop
- **Reorder Groups** — Drag group headers to reorder
- **Reorder Labels** — Drag label rows within a table to reorder
- **Visual Feedback** — Red outline shows drop targets

---

## 📊 What's Included

| File | Purpose |
|------|---------|
| `label-maker.html` | Main application (open in browser) |
| `label-maker-data.json` | Your label data (auto-saved from localStorage on export) |
| `generate-qr-urls.js` | Script to generate QR files and update JSON |
| `convert-format.js` | Helper to convert old label format to new format |
| `qr_codes/` | Text files for each label (hosted on GitHub) |
| `docs/index.html` | GitHub Pages redirect service for short URLs |
| `README.md` | This file |

---

## 🚀 Getting Started

### 1. Open the App
```bash
firefox label-maker.html
```
Or open `label-maker.html` in any modern browser (Chrome, Firefox, Safari, Edge).

### 2. Create Your First Label
1. Switch to **Edit Labels** tab
2. Click **+ Add Group** to create a group
3. Click **+ Label** to add a label to the group
4. Fill in:
   - **Code**: Short identifier (e.g., `AC-01`)
   - **Description**: Full text (e.g., `AC Power - 480V input`)
   - **Type**: Select cable/equipment type
   - **QR**: Leave empty (will be filled by script)
5. Changes auto-save to browser storage

### 3. Customize Labels
In **Preview & Print** tab, adjust:
- **Label Dimensions**: Width, height, wrap zone, color bar thickness
- **Text & Padding**: Font sizes, padding
- **Graphics & Icons**: Icon size, spacing, opacity, stripe opacity
- **QR Size**: QR code dimensions
- **Page Setup**: Paper size, orientation
- **Visible Elements**: Toggle what appears on labels

### 4. Generate QR Codes
Once you have labels and are ready to use short QR URLs:

```bash
# Generate QR files and update JSON
node generate-qr-urls.js dark-cli label-maker
```

This will:
- Read your `label-maker-data.json`
- Create text files in `qr_codes/` (one per label)
- Update JSON with GitHub Pages short URLs
- Preserve old URLs in `qr_old` field

### 5. Push to GitHub
```bash
git add .
git commit -m "Update labels"
git push
```

The QR codes are now live and working!

---

## 📝 Managing Label Data

### Export Labels
1. Click **Export JSON** in Edit Labels toolbar
2. Save `label-maker-data.json` to your computer
3. Commit to git: `git add label-maker-data.json && git commit -m "Backup labels"`

### Import Labels
1. Click **Import JSON**
2. Select your saved `label-maker-data.json`
3. Labels load into the app

### Import from CSV
1. Create CSV file with columns: `code,description,type,qr`
2. Click **Import CSV**
3. Labels are added to "CSV Import" group

Example CSV:
```
code,description,type,qr
AC-01,AC Power - Main,ac,
ETH-01,Ethernet - Room 1,eth,
FBR-01,Fiber - Backbone,fbr,
```

### Bulk Update
1. Edit `label-maker-data.json` in a text editor
2. Run: `node generate-qr-urls.js dark-cli label-maker`
3. Commit and push

---

## 🔗 QR Code System

### How It Works
1. **Short URL** — QR code encodes: `https://dark-cli.github.io/label-maker/?code=AC-01`
2. **GitHub Pages** — Short URL redirects via `docs/index.html`
3. **Raw Text** — Automatically redirects to: `https://raw.githubusercontent.com/dark-cli/label-maker/master/qr_codes/AC-01.txt`
4. **Content** — User sees the label description

### URL Length Comparison
- **Old (Long):** `https://raw.githubusercontent.com/dark-cli/label-maker/master/qr_codes/AC-OUT-DIST-F.txt` (113 chars)
- **New (Short):** `https://dark-cli.github.io/label-maker/?code=AC-OUT-DIST-F` (61 chars) ✅ 46% shorter!

### Adding New Labels
Just follow the workflow:
1. Add label to `label-maker-data.json`
2. Run: `node generate-qr-urls.js dark-cli label-maker`
3. Commit and push
4. QR code is ready to use!

---

## 📋 Data Format

### Label Structure
```json
{
  "code": "AC-01",
  "desc": "AC Power - 480V input",
  "type": "ac",
  "qr": "https://dark-cli.github.io/label-maker/?code=AC-01",
  "qr_old": "https://raw.githubusercontent.com/dark-cli/label-maker/master/qr_codes/AC-01.txt"
}
```

### Settings
All display settings are stored in `label-maker-data.json`.

---

## 🖨️ Printing Tips

### Best Practices
1. **Adjust Label Size** — Use Label Dimensions sliders to fit your printer
2. **Choose Paper Size** — Match your actual paper (A4, Letter, etc.)
3. **Test Print** — Print to PDF first to verify layout
4. **Page Preview** — Red lines show page breaks (labels won't split)
5. **Print Settings** — Use browser print dialog for optimal results

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section in the app
2. Review your `label-maker-data.json` for format issues
3. Verify GitHub Pages is enabled
4. Check that git push succeeded

---

**Created with ❤️ for network infrastructure management**
