const { Worker } = require('worker_threads');
const taskEmitter = require('./events/taskEmitter');

console.log('Main thread started');

// Listen to event
taskEmitter.on('taskCompleted', (data) => {
  console.log('Event Received: Task Completed');
  console.log('Result:', data);
});

// Create worker
const worker = new Worker('./worker.js');

// Receive message from worker
worker.on('message', (result) => {
  taskEmitter.emit('taskCompleted', result);
});

// Error handling
worker.on('error', (err) => {
  console.error('Worker Error:', err);
});
