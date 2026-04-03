#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const GITHUB_USER = process.argv[2] || 'max';
const GITHUB_REPO = process.argv[3] || 'label-maker';
const GITHUB_BRANCH = process.argv[4] || 'main';
const QR_FOLDER = './qr_codes';
const JSON_FILE = './label-maker-data.json';

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m'
};

function log(msg, color = 'reset') {
  console.log(`${colors[color]}${msg}${colors.reset}`);
}

// Step 1: Read JSON file
log('📖 Reading label data...', 'blue');
if (!fs.existsSync(JSON_FILE)) {
  log(`❌ Error: ${JSON_FILE} not found!`, 'red');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(JSON_FILE, 'utf8'));
log(`✅ Found ${data.groups.length} groups`, 'green');

// Step 2: Remove old QR folder and create new one
log('🗑️  Removing old QR folder...', 'blue');
if (fs.existsSync(QR_FOLDER)) {
  fs.rmSync(QR_FOLDER, { recursive: true, force: true });
}
fs.mkdirSync(QR_FOLDER, { recursive: true });
log(`✅ Created fresh ${QR_FOLDER}/`, 'green');

// Step 3: Process each label
let filesCreated = 0;
const baseUrl = `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/${GITHUB_BRANCH}/qr_codes`;

data.groups.forEach((group) => {
  group.labels.forEach((label) => {
    // Rename old qr field to qr_old
    if (label.qr && label.qr.trim()) {
      label.qr_old = label.qr;
    }

    // Generate filename from code
    const filename = `${label.code}.txt`;
    const filepath = path.join(QR_FOLDER, filename);

    // Create file with description content
    const content = label.desc || label.code;
    fs.writeFileSync(filepath, content, 'utf8');
    
    // Generate GitHub raw URL
    const qrUrl = `${baseUrl}/${filename}`;
    label.qr = qrUrl;
    
    filesCreated++;
    log(`  📝 ${label.code}: "${content}"`, 'green');
  });
});

// Step 4: Save updated JSON
log('💾 Saving updated label data...', 'blue');
fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2), 'utf8');
log(`✅ Updated ${JSON_FILE}`, 'green');

// Summary
log('\n' + '='.repeat(60), 'yellow');
log(`✨ QR Generation Complete!`, 'green');
log('='.repeat(60), 'yellow');
log(`📁 QR Folder: ${QR_FOLDER}/`);
log(`📄 Files Created: ${filesCreated}`);
log(`🔗 Base URL: ${baseUrl}/`);
log(`\n📋 Next Steps:`);
log(`  1. Push qr_codes/ folder to GitHub`);
log(`  2. Update GitHub_USER in script if needed: "${GITHUB_USER}"`);
log(`  3. Update GITHUB_REPO in script if needed: "${GITHUB_REPO}"`);
log(`  4. Reload Label Maker to see new QR URLs`);
log(`\n💡 Usage: node generate-qr-urls.js [GITHUB_USER] [GITHUB_REPO] [BRANCH]`);
