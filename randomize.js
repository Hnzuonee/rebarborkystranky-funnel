let html = fs.readFileSync('public/index.html', 'utf8')
              .replace(/{{SALT}}/g, salt);
fs.writeFileSync('public/index.html', html);

let css  = fs.readFileSync('public/style.css', 'utf8')
              .replace(/{{SALT}}/g, salt);
fs.writeFileSync('public/style.css', css);
