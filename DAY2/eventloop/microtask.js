//?A microtask is a high-priority asynchronous task that is executed immediately after the current 
//?synchronous code finishes and before any macrotask in the event loop.
console.log("Script start");

process.nextTick(() => {
  console.log("process.nextTick");
});

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