// Exercise  Level 1
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
    Question 1: Change skills array to JSON using JSON.stringify()
*/

// Answer

const changeSkills = JSON.stringify(skills, undefined, 2)
console.log(changeSkills)

/*
    Question 2: Stringify the age variable
*/

// Answer

const stringifyAge = JSON.stringify(age, undefined, 2)
console.log(stringifyAge)

/*
    Question 3: Stringify the isMarried variable
*/

// Answer

const stringifyIsMarried = JSON.stringify(isMarried, undefined, 2)
console.log(stringifyIsMarried)

/*
    Question 4: Stringify the student object
*/

// Answer

const stringifyStudent = JSON.stringify(student, undefined, 2)
console.log(stringifyStudent)