const fs = require("fs");
// import the file system module
//The Event Loop is the core mechanism that allows JavaScript (and Node.js) to perform non-blocking, asynchronous 
//operations even though JavaScript runs on a single thread.
console.log("Program Start");

setTimeout(() => console.log("Timer Phase"), 0);
setImmediate(() => console.log("Check Phase"));
//?fs.readFile() is an asynchronous I/O operation
//?It will be handled by libuv and completed in the poll phase
fs.readFile(__filename, () => {
  console.log("Poll Phase");
});

console.log("Program End");
