// literal way
let arr=[]
console.log(arr);

//new keyword
let arr1=new Array()
console.log(arr1);

//constructor way
let arr2=Array()
console.log(arr2);

let arr3=[10,20,30,"hi",NaN.null,true,false,undefined,10n,`hello`,10.5]
console.log(arr3);
console.log(arr3[2]);
console.log(arr3[6]);
console.log(arr3.length);

let arr4=[]
console.log(arr4);


//inserting the elements rom the end of the array
arr4.push(10,20,30)
console.log(arr4);

arr4.push(80,"hello")
console.log(arr4);
//inserting the elements from the start of the array
arr4.unshift(50,"hi")
console.log(arr4);
arr4.unshift(100)
console.log(arr4);


//removing the element from the end ofthe array
arr4.pop()
console.log(arr4);
arr4.pop()
console.log(arr4);

//removing the element from the start of the array
arr4.shift()
console.log(arr4);
arr4.shift()
console.log(arr4);

let arr5=[10,20,30,40]
console.log(arr5);
//it will extract elements of an array and it will not modify the original array
console.log(arr5.slice(1,3));
console.log(arr5);

//it will extract elements of an array and it will  modify the original array
arr5.splice(1,2)
console.log(arr5);
arr5.splice(1,0,50)
console.log(arr5);
//it will print the array elements
for(let i of arr5){
    console.log(i);
    
}
//it will print the index value
for(let i in arr5){
    console.log(i);
    
}
let arr6=[10,20,30,40,50]
console.log(arr6);
//it will do the ay arithematic operation and it will and it will return only one output it will not modify the original array
let q=arr6.reduce((acc,v)=>{
    console.log(acc,v);
    return acc+v
    
},5)
console.log(q);
console.log(arr6);
//it will print the array after filter the condition and it will not modify the original array
let w=arr6.filter((e)=>{
    return e>20;

})
console.log(w);
console.log(arr6);

















