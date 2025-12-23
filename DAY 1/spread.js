//! spread parameter:it spread the values from an array or object
//?syntax:...arrayName/ObjectName
//?you can use spread anywhere
//todo example
let arr=[10,20,30,40,50,60]
console.log(...arr);
let arr1=[10,20,30,40,50]
console.log(arr1,"arr1");
//?we can use spread parameter any where
//! copying one array into another array
// let newarr=[...arr1]//!shallow copy
// let newarr=[...arr1,10,20]
// let newarr=[...arr1,10,20,...arr1]//shallow copy
// console.log(newarr,"newarr");

//!merging the multiple arrays into single array
// let cars=["RollsRoyce","BMW","nano","Alto"]
// let players=["virat","hardik","Rohit","salt","Dhoni","padikal"]
// let mergedArray=[...cars,...players]
// console.log(mergedArray);

//!Adding the new elements with previous element of an array.
// let arr=["HTML","CSS","JS"]
// let newarr=[...arr,"Reactjs"]

// let employee={
//     eid:10,
//     ename:"Rishika",
//     esalary:57000,
//     ismarried:false
// }
// let newobj={...employee}
// console.log(newobj,"newobj");

//!copying the multiple object into single object

// let movie={
//     moviename:"bahubali",
//     director:"rajamouli",
//     musicdirector:"DSP",
//     acters:["prabas","katappa","anushka","tamarna"]
// }
// let movie2={
//     moviename:"kgf",
//     director:"prashanth",
//     musicdirector:"DSravi basur",
//     acters:["yash","sanjay"]
// }
// let newobj={...movie,...movie2}