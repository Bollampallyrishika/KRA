const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

console.log('Full file path:', filePath);
console.log('File name:', path.basename(filePath));
console.log('Directory name:', path.dirname(filePath));
console.log('File extension:', path.extname(filePath));

