Async programming allows Node.js to handle multiple operations concurrently without blocking, enabling scalable and high-performance APIs.
Asynchronous programming allows operations like I/O, API calls, or database queries to execute without blocking the main thread, enabling Node.js to handle multiple requests efficiently.
Callbacks are functions passed as arguments and executed after an async task completes. They were the earliest async pattern but can lead to callback hell if nested.
Promises improve readability and error handling by avoiding deep nesting. They provide .then() and .catch() for better control over async flow.
Async/await makes asynchronous code look synchronous, improves readability, and allows centralized error handling using try/catch.
How is error handling done in async code?

Callbacks: error-first pattern

Promises: .catch()

Async/await: try/catch blocks
How does async programming avoid blocking?

Long-running tasks are delegated to background execution, and results are handled later through callbacks, promises, or await, keeping the event loop free.