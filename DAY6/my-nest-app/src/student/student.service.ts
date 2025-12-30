/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id:1,name:'sai',age:23},//0
        { id:2,name:'Trilok',age:25}//1
    ];
    getAllStudents(){
        return this.students;
    }
    getStudentById(id:number){
        const student =this.students.find((s) =>s.id === id);
        if(!student) throw new NotFoundException('student not found!');
        return student;
    }
    //post
createStudent(data: {name: string; age: number}) {
    const newStudent = {
        id: Date.now(),
        ...data,
    };
    this.students.push(newStudent);
    return newStudent;
}

//put
updateStudent(id: number, data: {name: string; age: number}){
    const index=this.students.findIndex((s)=> s.id === id);
    if(index === 1) throw new NotFoundException(' student not found!');
    this.students[index] = {id,...data};
    return this.students[index];
}

    //patch
    patchStudent(id:number, data:Partial<{name:string; age: number}>){
        const student =this.getStudentById(id);
        Object.assign(student,data);
        return student;
    
}
//delete
deleteStudent(id: number){
      const index=this.students.findIndex((s)=> s.id === id);
    if(index === 1) throw new NotFoundException(' student not found!');
    const deleted= this.students.splice(index,1)//1,1(for remove)
    return {message:'Student Deleted',student :deleted[0]}
}
}
