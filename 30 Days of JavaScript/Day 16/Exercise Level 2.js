// Exercise Level 2
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}


/*
    Question 1: Stringify the students object with only firstName, lastName and skills properties
*/

// Answer

const stringifyStudent = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 3)
console.log(stringifyStudent);

