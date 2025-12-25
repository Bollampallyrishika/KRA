-> Events in Node.js

Node.js uses an event-driven architecture

The EventEmitter allows different parts of the app to communicate

It is non-blocking and asynchronous

Used for notifications, logs, task completion signals

-> Worker Threads in Node.js

Node.js runs JavaScript in one main thread

CPU-heavy tasks block the event loop 

Worker Threads allow running CPU tasks in separate threads

Keeps the main thread free

Only the main file is executed. Worker and event files are used internally, not run directly.
->running process of the main .js
main.js starts the application
A worker thread is created
Heavy CPU task runs in worker.js
Result is sent back to main thread
Event is emitted using taskEmitter
Listener receives and logs the result

Why combine Events + Worker Threads?
Problem	Solution
CPU-heavy task blocks server	Use Worker Thread
Need async communication	    Use Events
High traffic + heavy tasks	    Better scalability