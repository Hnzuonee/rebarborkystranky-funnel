// randomize.js  (v kořeni repa)
const fs = require('fs');
const salt = Math.random().toString(36).slice(2, 6);

// uprav HTML
let html = fs.readFileSync('public/index.html', 'utf8')
              .replace(/{{SALT}}/g, salt);
fs.writeFileSync('public/index.html', html);

// uprav CSS
let css = fs.readFileSync('public/style.css', 'utf8')
              .replace(/{{SALT}}/g, salt);
fs.writeFileSync('public/style.css', css);

console.log(`🔄 injected SALT: ${salt}`);
