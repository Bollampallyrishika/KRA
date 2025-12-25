const EventEmitter = require('events');

class TaskEmitter extends EventEmitter {}

module.exports = new TaskEmitter();
