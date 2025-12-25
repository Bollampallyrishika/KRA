const fs = require('fs');
const path = require('path');

const sourceFile = path.join(__dirname, 'source.txt');
const destFile = path.join(__dirname, 'destination.txt');

// Write initial content to source file
fs.writeFileSync(sourceFile, 'This is a big file stream example.');

// Create read and write streams
const readStream = fs.createReadStream(sourceFile, 'utf8');
const writeStream = fs.createWriteStream(destFile);

// Pipe read stream to write stream
readStream.pipe(writeStream);

readStream.on('end', () => {
  console.log('File copied successfully using streams!');
});
