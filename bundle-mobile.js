const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Ensure www exists
if (!fs.existsSync('www')) fs.mkdirSync('www');

const filesToCopy = ['index.html', 'styles.css', 'app.js', 'manifest.webmanifest', 'sw.js'];
filesToCopy.forEach(f => {
  if (fs.existsSync(f)) fs.copyFileSync(f, path.join('www', f));
});

if (fs.existsSync('icons')) {
  copyDir('icons', 'www/icons');
}

console.log('Mobile web assets bundled to www/ successfully');
