//?A microtask is a high-priority asynchronous task that is executed immediately after the current 
//?synchronous code finishes and before any macrotask in the event loop.
console.log("Script start");
//?Runs before Promises and before event loop phases Executed after current synchronous code finishes
process.nextTick(() => {
  console.log("process.nextTick");
});
//?Runs before timers and I/O callbacks

Promise.resolve().then(() => {
  console.log("Promise.then");
});

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

console.log("Script end");