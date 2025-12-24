/*An async backend handles requests in a non-blocking way, allowing 
the server to process many requests concurrently without waiting for each task to finish.*/

const fs = require("fs");

console.log("Request received");

fs.readFile("data.txt", "utf8", () => {
  console.log("File read completed");
});

console.log("Non-blocking continues");