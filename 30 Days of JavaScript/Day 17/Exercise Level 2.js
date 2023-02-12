// Exercise  Level 2

/*
    Question 1: Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and 
    values for the keys. Store the student object in your browser localStorage.
*/

// Answer

const student = {
    firstName: 'Habib',
    lastName: 'Salau',
    age: 5,
    skills: ['HTML', 'CSS', 'Javascript', 'MATLAB'],
    country: 'Ghana'
}

const stringStudent = JSON.stringify(student, undefined, 3);
localStorage.setItem('student', stringStudent)
console.log(localStorage)