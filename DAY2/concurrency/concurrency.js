//Concurrency means handling multiple tasks at the same time by making progress on each, even if only one task is 
// executing at any exact moment.synchronous code run fast.
console.log("Start");

setTimeout(() => console.log("Task 1"), 1000);//asynchronous
setTimeout(() => console.log("Task 2"), 5000);

console.log("End");

