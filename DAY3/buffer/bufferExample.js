//?Buffer is used in Node.js to handle raw binary data efficiently, especially during file, stream, and 
//?network operations.
// Create buffer from string
const buffer = Buffer.from('Hello Node.js Buffer!');
console.log('Buffer content:', buffer);
console.log('As string:', buffer.toString());//?Converts binary data back into a readable string
//Buffer handles raw binary data
// Allocate buffer of fixed size
const buf2 = Buffer.alloc(10);
console.log('Allocated buffer:', buf2);

// Fill buffer with data
buf2.fill('a');
console.log('Filled buffer:', buf2.toString());