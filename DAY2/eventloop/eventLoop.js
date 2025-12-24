const fs = require("fs");
//The Event Loop is the core mechanism that allows JavaScript (and Node.js) to perform non-blocking, asynchronous 
//operations even though JavaScript runs on a single thread.
console.log("Program Start");

setTimeout(() => console.log("Timer Phase"), 0);
setImmediate(() => console.log("Check Phase"));

fs.readFile(__filename, () => {
  console.log("Poll Phase");
});

console.log("Program End");
