//?Looks like synchronous code
//?Best readability
//?Centralized error handling using try/catch
//!Async/await makes asynchronous code look synchronous, improves readability, 
// !and allows centralized error handling using try/catch.

function fetchDataAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received using Async/Await');
    }, 2000);
  });
}

async function main() {
  try {
    console.log('Start');

    const data = await fetchDataAsync();
    console.log(data);

    console.log('End');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
