#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const GITHUB_USER = process.argv[2] || 'dark-cli';
const GITHUB_REPO = process.argv[3] || 'label-maker';
const QR_FOLDER = './qr_codes';
const JSON_FILE = './label-maker-data.json';

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

log('📖 Reading label data...', 'blue');
if (!fs.existsSync(JSON_FILE)) {
  log(`❌ Error: ${JSON_FILE} not found!`, 'red');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(JSON_FILE, 'utf8'));
log(`✅ Found ${data.groups.length} groups`, 'green');

log('🗑️  Removing old QR folder...', 'blue');
if (fs.existsSync(QR_FOLDER)) {
  fs.rmSync(QR_FOLDER, { recursive: true, force: true });
}
fs.mkdirSync(QR_FOLDER, { recursive: true });
log(`✅ Created fresh ${QR_FOLDER}/`, 'green');

let filesCreated = 0;
const shortUrlBase = `https://${GITHUB_USER}.github.io/${GITHUB_REPO}/?code`;

data.groups.forEach((group) => {
  group.labels.forEach((label) => {
    if (label.qr && label.qr.trim()) {
      label.qr_old = label.qr;
    }

    const filename = `${label.code}.txt`;
    const filepath = path.join(QR_FOLDER, filename);
    const content = label.desc || label.code;
    fs.writeFileSync(filepath, content, 'utf8');
    
    const qrUrl = `${shortUrlBase}=${label.code}`;
    label.qr = qrUrl;
    
    filesCreated++;
    log(`  📝 ${label.code}: "${content}"`, 'green');
  });
});

log('💾 Saving updated label data...', 'blue');
fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2), 'utf8');
log(`✅ Updated ${JSON_FILE}`, 'green');

log('\n' + '='.repeat(60), 'yellow');
log(`✨ QR Generation Complete!`, 'green');
log('='.repeat(60), 'yellow');
log(`📁 QR Folder: ${QR_FOLDER}/`);
log(`📄 Files Created: ${filesCreated}`);
log(`🔗 Short URL Base: https://${GITHUB_USER}.github.io/${GITHUB_REPO}/?code=`);
log(`\n✅ SHORT URL EXAMPLES (Ready to use!):`);
log(`  ${shortUrlBase}=AC-OUT-DIST-F`);
log(`  ${shortUrlBase}=ETH-ROOM`);
log(`  ${shortUrlBase}=HOME-SARA`);
log(`\n💡 Usage: node generate-qr-urls.js [GITHUB_USER] [GITHUB_REPO]`);
