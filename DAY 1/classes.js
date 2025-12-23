//!class:It is blueprint for creating the object
//?syntax
// class ClassName{
//     member of the class
// }
class React{
    no_of_star_candidates
    //! it is used initialize the non static properties
    constructor(name,age,candidates){
        this.name=name
        this.age=age
        this.no_of_star_candidate=candidates;
    }
    noofstudents=104;
    static no_of_chairs=105;
    reactClassinfo(){
        console.log(this.noofstudents);
        
    }
    static classtime(){
        console.log(("8:30am if you late you have to give the intro"));
        
    }
}
//!non-static members ===> object reference variable
let r1=new React("rishi",12,2)
console.log(r1);

console.log(r1.noofstudents);

r1.reactClassinfo()

//! static members ====>className
console.log(React.no_of_chairs);
React.classtime()

