//literal way
let obj={}
console.log(obj);


let obj1={
    name:"abc",
    id:123,
    salary:"5lpm",
    role:"dabba dev"
}
console.log(obj1);
console.log(obj1.name);
console.log(obj1.salary);


//new way
let obj2=new Object()
console.log(obj2);


//constructor way
let obj3=Object()
console.log(obj3);

//constructor function
function demo(name,id){
this.name=name
this.id=id
}
let o=new demo("xyz",123)
console.log(o);
console.log(o.name);
console.log(o.id);

let obj4={}
console.log(obj4);

//inserting new key&value pair
obj4.name="divya"
console.log(obj4);
obj4.id=987
console.log(obj4);

//upadate the previous key value pair
obj4.name="rishi"
console.log(obj4);


//delete key value pair
delete obj4.id
console.log(obj4);

let obj5={
    emp:"rani",
    empid:123,
   empsalary:12345,
   emprole:"dabba"
}
console.log(obj5);

let k=Object.keys(obj5)
console.log(k);

let v=Object.values(obj5)
console.log(v);


Object.seal(obj5)
console.log(Object.isSealed(obj5));


//upadate the previous key value pair
obj5.empname="raja"
console.log(obj5);

//upadate new key value pair
obj5.empaddress="hyd"
console.log(obj5);


//delete key value pair
delete obj5.empname
console.log(obj5);


Object.freeze(obj5)
console.log(Object.isFrozen(obj5));



//update the previous key value pair
obj5.empname="revi"
console.log(obj5);



//update new key value pair
obj5.empaddress="hyd"
console.log(obj5);


//delete key value pair
delete obj5.empname
console.log(obj5);

let obj6={
    name:"abc1",
    id:123
}
console.log(obj6);

let obj7={
    role:"web",
    salary:"5lpa"
}
console.log(obj7);

let obj8=Object.assign(obj6,obj7)
console.log(obj8);

let obj9=Object.assign(obj7,obj6)
console.log(obj9);

let obj10={
    name:"rani",
    salary:"10lpa",
    address:"hyd"
}
let obj11=Object.entries(obj10)
for(let i of obj11){
    console.log(i);
    
}

let obj12=Object.create(null)
console.log(obj12);
obj12 .name="xyz"
console.log(obj12);

let student=[
    {
        name:"frooty",
        roleno:12,
        course:{
            web:40,
            java:20,
            sql:20,
            presentation:40

        }
    },
    {
        name:"divya",
        roleno:12,
      
        
    },
    {
        name:"yashu",
        roleno:12
    },
    {
        name:"sushmitha",
        roleno:12
    }
    
]
console.log(student[0].name);
for(let i=0;i<length;i++){
console.log(student[i].name);


}
console.log(student[0].course.sql); 

let student1=[
    {
        name:"frooty",
        roleno:12,
        subjectmarks:{
            physics:99,
            chemistry:88,
            biology:89,
            maths:98,
            social:80
           

        }
    },
    {
        name:"divya",
        roleno:12,
      subjectmarks:{
        physics:62,
        chemistry:54,
        biology:75,
        maths:78,
        social:98

      }
        
    },
    {
        name:"yashu",
        roleno:12,
        subjectmarks:{
            physics:66,
            chemistry:95,
            biology:78,
            maths:88,
            social:79
    
          }
    },
    {
        name:"sushmitha",
        roleno:12,
        subjectmarks:{
            physics:80,
            chemistry:90,
            biology:75,
            maths:85,
            social:98
    
          }
    }
    
]
//total marks
for(let i=0;i<student1.length;i++){
let a=student1[i].subjectmarks.physics+student1[i].subjectmarks.chemistry+student1[i].subjectmarks.biology+student1[i].subjectmarks.maths+student1[i].subjectmarks.social
console.log(student[i].name+a);
}

//average marks
for(let i=0;i<student1.length;i++){
    let a=student1[i].subjectmarks.physics+student1[i].subjectmarks.chemistry+student1[i].subjectmarks.biology+student1[i].subjectmarks.maths+student1[i].subjectmarks.social
   let b=a/5
   console.log(student[i].name+b);
   
    }
    // first rank and second rank

for(let i=0;i<student1.length;i++){
    let a=student1[i].subjectmarks.physics+student1[i].subjectmarks.chemistry+student1[i].subjectmarks.biology+student1[i].subjectmarks.maths+student1[i].subjectmarks.social
    
    let b=a/5

    if(b>=90){
        console.log("first rank is"+student[i].name+b);
        
    }
    else if(b>=85){
        console.log("second rank is"+student[i].name+b);
        
    }

   
    }















