//literal
let a="hi"
console.log(a);
let b='hello'
console.log(b);
let c=`lorem hi hello`
console.log(c);

//new keyword
let str=new String("hello")
console.log(str);

//constructor
let str1=String("hi hello")
console.log(str1);

let str2="hello Javascript"
console.log(str2[6]);
console.log(str2[0]);
console.log(str2.repeat(2));
console.log(str2.slice(6,10));
console.log(str2.replace("hello","css"));
console.log(str2);
console.log(str2.trim());
console.log(str2.trimEnd());
console.log(str2.trimStart());
console.log(str2.includes("1"));
console.log(str2.indexOf("a"));
console.log(str2.lastIndexOf("a"));


console.log(str2.substring(6,10));
console.log(str2.substr(6,10))
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());
console.log(str2.charCodeAt(9));
console.log(str2.charAt(25));

let str3="html css"
console.log(str3.startsWith("t"));
console.log(str3.endsWith("s"));


let str4=" javascript"
console.log(str3.concat(str4));

let str5="javascript html"
console.log(str5.length);
console.log(str5.split(""));
console.log(str5.split("a"));
console.log(str5.split(" "));


let str6=""
for(let i=0;i<str5;i++){
    str6=str5[i]+str6
}
console.log(str6);




























