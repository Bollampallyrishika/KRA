const http = require('http');
const fs = require('fs');
const path = require('path');

// Path to file
const filePath = path.join(__dirname, 'example.txt');

// Create file for demonstration
fs.writeFileSync(filePath, 'Hello from combined demo!');

// Create HTTP server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Stream file content to client
    const readStream = fs.createReadStream(filePath);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    readStream.pipe(res);

    readStream.on('end', () => console.log('File streamed successfully!'));
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Page not found');
  }
});

server.listen(4000, () => {
  console.log('Combined demo server running at http://localhost:4000');
});
