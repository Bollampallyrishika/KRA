//?Uses a function passed as an argument
//?Executes asynchronously
//?Can lead to callback hell if overused
//!Callbacks are functions passed as arguments and executed after an async task completes. 
// !They were the earliest async pattern but can lead to callback hell if nested.
function fetchDataCallback(callback) {
  setTimeout(() => {
    callback(null, 'Data received using Callback');
  }, 2000);
}

console.log('Start');

fetchDataCallback((error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});

console.log('End');
