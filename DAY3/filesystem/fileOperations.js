const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

// Write file
fs.writeFile(filePath, 'Hello Node.js FS Module!', (err) => {
  if (err) throw err;
  console.log('File created and written successfully!');

  // Read file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);

    // Append data
    fs.appendFile(filePath, '\nAppending new data...', (err) => {
      if (err) throw err;
      console.log('Data appended successfully!');

      // Delete file
      fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log('File deleted successfully!');
      });
    });
  });
});
