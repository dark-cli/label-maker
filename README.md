# 🏷️ Label Maker

A fully-featured web application for creating, managing, and printing professional cable and equipment labels with QR codes. All data is stored locally in your browser and synced to GitHub for backup and short URL generation.

## 🚀 Quick Links

| Link | Purpose |
|------|---------|
| **[Open Label Maker →](https://dark-cli.github.io/label-maker/label-maker.html)** | Create and manage your labels in the browser |
| **[View QR Landing Page →](https://dark-cli.github.io/label-maker/?code=AC-CHG-IN)** | See what users see when they scan a QR code |
| **[GitHub Repository](https://github.com/dark-cli/label-maker)** | Source code and data files |

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

### Option A: Use the Official Instance (Recommended for Most Users)

Simply visit **[https://dark-cli.github.io/label-maker/label-maker.html](https://dark-cli.github.io/label-maker/label-maker.html)** in your browser and start creating labels. No installation needed!

All your data is saved locally in your browser. When you're ready to generate working QR codes, follow the **Create Your Own Fork** section below.

### Option B: Run Locally
```bash
git clone https://github.com/dark-cli/label-maker.git
cd label-maker
firefox src/label-maker.html
```
Or open `src/label-maker.html` in any modern browser (Chrome, Firefox, Safari, Edge).

---

## 📌 Create Your Own Fork with Working QR Codes

Want to use the QR code system with your own labels? Here's how to set up your own GitHub-hosted instance in 5 minutes:

### Step 1: Fork the Repository
1. Go to [https://github.com/dark-cli/label-maker](https://github.com/dark-cli/label-maker)
2. Click the **Fork** button in the top-right corner
3. Choose your GitHub username as the owner (e.g., `your-username/label-maker`)
4. Click **Create fork**

### Step 2: Enable GitHub Pages
1. Go to your forked repo: `https://github.com/your-username/label-maker`
2. Click **Settings** (top-right)
3. Scroll to **Pages** (left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Select branch: **master**, folder: **root** (or **docs** if you only want the landing page)
6. Click **Save**
7. Wait ~1 minute for GitHub to deploy
8. Your app will be available at: `https://your-username.github.io/label-maker/label-maker.html`

### Step 3: Create Your Labels
1. Open your app: `https://your-username.github.io/label-maker/label-maker.html`
2. Create labels in the **Edit Labels** tab
3. Customize dimensions, fonts, and colors in the **Preview & Print** tab
4. Click **Export Markdown** to save your label data

### Step 4: Update Your Repository with Label Data
1. Open the **Markdown** file you exported (should look like the `data/labels.md` structure)
2. Go to your GitHub repo: `https://github.com/your-username/label-maker`
3. Click **Add file** → **Upload files**
4. Drag and drop your markdown file (or navigate to `data/labels.md` if updating)
5. Add a commit message: `"Update labels"` 
6. Click **Commit changes**

### Step 5: Generate QR Codes
Once your labels are in `data/labels.md`, the QR codes are automatically ready! 

When a user scans a QR code or clicks the link, they'll see:
- **URL:** `https://your-username.github.io/label-maker/?code=YOUR-CODE`
- **Landing page:** Shows the label title and Arabic description with right-to-left support
- **Theme:** Automatically matches their system's light/dark mode preference

### Example: Your First Label's QR Link
If your label code is `AC-CHG-IN`, the QR code will point to:
```
https://your-username.github.io/label-maker/?code=AC-CHG-IN
```

Scan it or visit that URL to see the label information.

---

## 🔄 Updating Your Labels

### Method 1: Use the Web App (Easiest)
1. Open your app: `https://your-username.github.io/label-maker/label-maker.html`
2. Make changes in the **Edit Labels** tab
3. Click **Export Markdown**
4. Upload the updated file to your GitHub repo (Settings → Upload files)
5. Done! QR codes are live

### Method 2: Edit on GitHub Directly
1. Go to `https://github.com/your-username/label-maker/blob/master/data/labels.md`
2. Click the **✏️ Edit** button
3. Make changes to the markdown (add/edit labels)
4. Click **Commit changes**
5. Done! Changes are live in ~30 seconds

### Method 3: Git Command Line (Advanced)
```bash
git clone https://github.com/your-username/label-maker.git
cd label-maker

# Edit data/labels.md with your labels
nano data/labels.md

# Push to GitHub
git add data/labels.md
git commit -m "Update labels"
git push origin master
```

---

### 1. Create Your First Label
1. Switch to **Edit Labels** tab
2. Click **+ Add Group** to create a group
3. In the group, enter label details:
   - **Code**: Short identifier (e.g., `AC-01`)
   - **Description**: Full text (e.g., `AC Power - 480V input`)
   - **Type**: Select cable/equipment type
   - **QR URL**: Will be auto-generated (leave as-is initially)
4. Changes auto-save to browser storage

### 2. Customize Label Appearance
In **Preview & Print** tab, adjust:
- **Label Dimensions**: Width, height, wrap zone, color bar thickness
- **Text & Padding**: Font sizes, padding
- **Graphics & Icons**: Icon size, spacing, opacity, stripe opacity
- **QR Size**: QR code dimensions
- **Page Setup**: Paper size, orientation
- **Visible Elements**: Toggle what appears on labels

---

## 📝 Managing Label Data

### Export Labels (Backup Your Work)
1. Click **Export Markdown** in Edit Labels toolbar
2. Save the file to your computer (this is your backup)
3. When you're ready, upload it to your GitHub repo

### Import Labels
1. Click **Import Markdown**
2. Select a markdown file with your labels
3. Labels load into the app instantly

### Label Markdown Format
Labels are stored as markdown for easy editing:

```markdown
# Label Maker Database

## Settings
- pagesize: A4
- orient: landscape
- facewidth: 58
- showCode: true

## Types
- **ac**: AC Power | #e02020 | 󱐋
- **eth**: Ethernet | #1a6fd4 | 󰈁

## Main Rack

### AC-CHG-IN
| Field | Value |
|-------|-------|
| **Title** | AC Power Input · Main to Inverter |
| **Type** | ac |
| **QR** | https://your-username.github.io/label-maker/?code=AC-CHG-IN |
| **Details** | خط الكهرباء الرئيسي من المنزل الذي يغذي جهاز العاكس |
```

---

## 🔗 QR Code System

### How It Works
1. **Short URL** — QR code encodes: `https://your-username.github.io/label-maker/?code=YOUR-CODE`
2. **GitHub Pages** — Serves the landing page at `docs/index.html`
3. **Fetch Data** — Uses GitHub's CDN to fetch label descriptions from `data/labels.md`
4. **Display** — Shows the label title (English) and description (Arabic with right-to-left support)

### URL Format
```
https://your-username.github.io/label-maker/?code=AC-CHG-IN
```

- Replace `your-username` with your GitHub username
- Replace `AC-CHG-IN` with any label code from your `data/labels.md`

### Adding New Labels
It's instant! Just:
1. Add the label to your `data/labels.md` file
2. Commit and push to GitHub
3. The QR code is immediately live
4. No build step, no scripts to run

Users scanning the QR code will automatically see the new label's information!

---

## 📁 File Structure

| File/Folder | Purpose |
|------------|---------|
| `src/label-maker.html` | Main application (open in browser) |
| `docs/label-maker.html` | Copy of app for GitHub Pages hosting |
| `docs/index.html` | QR code landing page (shows label info) |
| `data/labels.md` | Your label data in markdown format |
| `qr_codes/` | (Legacy) Text files for each label |

### Markdown Data Format

Your `data/labels.md` file structure:

```markdown
# Label Maker Database

## Settings
- pagesize: A4
- orient: landscape
- facewidth: 58
- wrapwidth: 22
- hdata: 17.5
- barwidth: 2
- codefont: 11.5
- descfont: 8
- padleft: 2.5
- iconsize: 4.5
- spacing: 1.5
- opacity: 37
- showCode: true
- showDesc: true
- showBorder: true

## Types
- **ac**: AC Power | #e02020 | 󱐋
- **dc**: DC Power | #ff7800 | 󱐋
- **eth**: Ethernet | #c061cb | 󰈁
- **fbr**: Fiber | #2ec27e | 󰓉

## Main Rack

### AC-CHG-IN
| Field | Value |
|-------|-------|
| **Title** | AC Power Input · Main to Inverter |
| **Type** | ac |
| **QR** | https://your-username.github.io/label-maker/?code=AC-CHG-IN |
| **Details** | خط الكهرباء الرئيسي من المنزل الذي يغذي جهاز العاكس |
```

**Key fields:**
- **Title**: What users see on the landing page (shown in header)
- **Type**: The label category (ac, dc, eth, fbr, or custom)
- **QR**: The full URL to the label (auto-generated)
- **Details**: The Arabic description (shown with RTL support)

---

## 🖨️ Printing Tips

### Best Practices
1. **Adjust Label Size** — Use Label Dimensions sliders to fit your printer
2. **Choose Paper Size** — Match your actual paper (A4, Letter, etc.)
3. **Test Print** — Print to PDF first to verify layout
4. **Page Preview** — Red lines show page breaks (labels won't split)
5. **Print Settings** — Use browser print dialog for optimal results

---

## ❓ FAQ

### Q: Do I need to know how to code?
**A:** No! The web app handles everything. Just type your labels, export as markdown, and upload to GitHub.

### Q: How do I know if GitHub Pages is working?
**A:** Visit `https://your-username.github.io/label-maker/label-maker.html`. If the app loads, GitHub Pages is working.

### Q: Can I use this for non-cable labels?
**A:** Absolutely! You can create any custom types (Servers, Rooms, Devices, etc.) and colors.

### Q: How do I add RTL text (Arabic)?
**A:** The Details field in your markdown automatically renders right-to-left. Just type or paste Arabic text.

### Q: Will my QR codes break if I delete a label?
**A:** Only that specific code will stop working. Other labels remain unaffected.

### Q: Can I print the labels?
**A:** Yes! The Preview & Print tab lets you adjust dimensions and print directly from the browser.

### Q: How do I back up my labels?
**A:** Click **Export Markdown** in the app and save the file. Git also keeps a history on GitHub.

---

## 🤝 Contributing

Found a bug or have a feature request? 
- Open an issue: [dark-cli/label-maker/issues](https://github.com/dark-cli/label-maker/issues)
- Fork and submit a pull request: [dark-cli/label-maker/pulls](https://github.com/dark-cli/label-maker/pulls)

---

**Created with ❤️ for network infrastructure management and team collaboration**
