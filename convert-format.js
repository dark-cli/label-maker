#!/usr/bin/env node

const fs = require('fs');

const old = JSON.parse(fs.readFileSync('label-maker-data.json', 'utf8'));

// If it's already in the new format, skip
if (old.groups) {
  console.log('✅ Already in new format, no conversion needed');
  process.exit(0);
}

// Convert old format to new format
const newFormat = {
  settings: {
    facewidth: 63, wrapwidth: 12, hdata: 15, barwidth: 3.5,
    codefont: 11.5, descfont: 8.5, padleft: 6.5,
    iconsize: 8, spacing: 8.5, opacity: 42, stripeOpacity: 44, qrSize: 12,
    pagesize: 'A4', orient: 'landscape',
    twoFace: true, showBorder: true, showWrap: true, showCode: true, showDesc: true, showQR: true
  },
  types: [
    { "id": "ac", "label": "AC Power", "color": "#e02020", "icon": "󱐋" },
    { "id": "dc", "label": "DC Power", "color": "#e07a00", "icon": "󱐋" },
    { "id": "eth", "label": "Ethernet", "color": "#1a6fd4", "icon": "󰈀" },
    { "id": "fbr", "label": "Fiber", "color": "#b89000", "icon": "󰌶" },
    { "id": "sw", "label": "Switch", "color": "#7b3fc4", "icon": "󰒢" }
  ],
  groups: old.map(group => ({
    title: group.title,
    labels: group.labels.map(label => ({
      code: label.code,
      desc: label.desc,
      type: label.type || 'ac',
      qr: label.qr || ''
    }))
  }))
};

fs.writeFileSync('label-maker-data.json', JSON.stringify(newFormat, null, 2));
console.log(`✅ Converted format: ${newFormat.groups.length} groups, ${newFormat.groups.reduce((sum, g) => sum + g.labels.length, 0)} labels`);
