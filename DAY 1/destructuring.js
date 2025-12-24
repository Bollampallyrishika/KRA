
let numbers = [10, 20, 30];
let [a, b, c] = numbers;

console.log("Array Destructuring:");
console.log(a, b, c);


let arr = [1, 2, 3, 4];
let [x, , y] = arr;

console.log("Skipping values:");
console.log(x, y);


let arr2 = [5];
let [p = 10, q = 20] = arr2;

console.log("Default values:");
console.log(p, q);


let arr3 = [1, 2, 3, 4, 5];
let [first, ...rest] = arr3;

console.log("Rest operator:");
console.log(first);
console.log(rest);


let student = {
  name: "Rishi",
  id: 101,
  role: "Developer"
};

let { name, id, role } = student;

console.log("Object Destructuring:");
console.log(name, id, role);


let { name: studentName, id: studentId } = student;

console.log("Renamed variables:");
console.log(studentName, studentId);


let user = { name: "Admin" };
let { name: userName, age = 25 } = user;

console.log("Object default values:");
console.log(userName, age);

let emp = {
  empName: "Divya",
  address: {
    city: "Hyderabad",
    pincode: 500001
  }
};

let {
  empName,
  address: { city, pincode }
} = emp;

console.log("Nested Destructuring:");
console.log(empName, city, pincode);


let person = {
  pname: "Rani",
  salary: "10lpa",
  location: "HYD"
};

let { pname, ...details } = person;

console.log("Object Rest:");
console.log(pname);
console.log(details);


function display({ pname, salary }) {
  console.log("Function Destructuring:");
  console.log(pname, salary);
}

display({ pname: "Rishi", salary: "12lpa" });

let m = 10;
let n = 20;

[m, n] = [n, m];

console.log("Swapped values:");
console.log(m, n);
