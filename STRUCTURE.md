# Project Structure

```
label-maker/
├── src/
│   └── label-maker.html          # Main application (fully self-contained)
│
├── data/
│   └── label-maker-data.json     # Label configuration & settings
│
├── qr_codes/                      # QR code content files (bilingual)
│   ├── AC-CHG-IN.txt
│   ├── AC-INV-OUT.txt
│   ├── ... (34 total label files)
│   └── HOME-UPLINK.txt
│
├── docs/
│   └── index.html                 # GitHub Pages QR redirect service
│
├── scripts/
│   ├── generate-qr-urls.js        # Generate/update QR content files
│   ├── generate-bilingual-qr.js   # Create bilingual QR descriptions
│   └── convert-format.js          # Convert old data format to new format
│
├── README.md                       # Full project documentation
├── CLAUDE.md                       # Development guidelines
├── STRUCTURE.md                    # This file
├── .gitignore                      # Git ignore rules
└── Label Maker.pdf                # Print-ready PDF example

```

## Key Directories

### `src/`
- **label-maker.html** — Main single-file application
  - All CSS, JavaScript, and inline SVG icons included
  - Two tabs: Edit Labels and Preview & Print
  - Auto-saves to localStorage

### `data/`
- **label-maker-data.json** — Label data source
  - Settings (dimensions, colors, fonts)
  - Type definitions (AC, DC, Ethernet, Fiber, Switch)
  - Groups and labels with QR URLs

### `qr_codes/`
- Text files containing bilingual descriptions
- Format: English on top, Arabic below (separated by ---)
- Hosted on GitHub, served via jsDelivr CDN
- Used by GitHub Pages QR redirect service

### `docs/`
- **index.html** — GitHub Pages redirect service
  - Displays QR content beautifully
  - Dark theme with bilingual support
  - Fetches content from qr_codes/ folder

### `scripts/`
- **generate-qr-urls.js** — Main script to update QR files
  - Usage: `node scripts/generate-qr-urls.js dark-cli label-maker`
- **generate-bilingual-qr.js** — Create bilingual content
  - Usage: `node scripts/generate-bilingual-qr.js`
- **convert-format.js** — Data format conversion utility
  - For migrating old label data to new format

## Workflow

### 1. Edit Labels
```bash
cd src
firefox label-maker.html
# Edit in browser, changes auto-save to localStorage
```

### 2. Update QR Content
Edit the text files directly:
```bash
# Edit a QR description
nano qr_codes/AC-CHG-IN.txt
# Commit and push to GitHub
git add qr_codes/AC-CHG-IN.txt
git commit -m "Update AC-CHG-IN description"
git push
```

### 3. Regenerate All QR Files
If you export from the app:
```bash
cd scripts
node generate-bilingual-qr.js
```

## Running Scripts

All scripts should be run from the project root:

```bash
# From /home/max/dev/label maker/
node scripts/generate-qr-urls.js
node scripts/generate-bilingual-qr.js
node scripts/convert-format.js
```

Scripts automatically adjust paths to access `data/` and `qr_codes/` folders.
