//nodejs it is an runtime environment used for executing javascrip code.
//node intervals means timer in the nodejs

console.log("Start");
setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));

Promise.resolve().then(() => console.log("Promise"));
process.nextTick(() => console.log("nextTick"));

console.log("End");
