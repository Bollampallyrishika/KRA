//Parallelism means executing multiple tasks at the exact same time, using multiple CPU cores or threads.
const { Worker } = require("worker_threads");
//?Allows Node.js to execute JavaScript in separate threads
//?Each worker runs on a different thread, not the event loop
new Worker(`
  console.log("Parallel task running");
`, { eval: true });
