//?Cleaner than callbacks
//?Supports .then() and .catch().
//?Easier error handling

function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received using Promise');
    }, 2000);
  });
}

console.log('Start');

fetchDataPromise()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

console.log('End');
