//Parallelism means executing multiple tasks at the exact same time, using multiple CPU cores or threads.
const { Worker } = require("worker_threads");

new Worker(`
  console.log("Parallel task running");
`, { eval: true });
