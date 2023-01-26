// Exercise  Level 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

/*
    Question 1: Find the person who has many skills in the users object.
*/

// Answer
const mostSkilled = () => {
    let mostSkill = '';
    for(const element in users){
        if(users[element]['skills'].length > mostSkill.length){
            mostSkill = element;
        }
    }
    console.log(`${mostSkill} has most skills`)
    return mostSkill;
}

mostSkilled();

/*
    Question 2: Count logged in users, count users having greater than equal to 50 points from the following object.
*/

// Answer

const countUser = () => {
    let count = 0;
    let allCount = 0;
    for(const element in users){
        if(users[element]['isLoggedIn'] == true){
            allCount++;
        }
         if(users[element]['points'] >= 50){
            count++;
        }
    }
    console.log(`The Number of logged in user are ${allCount} while the total number of user having more than fifty point are ${count}`)
    return count, allCount;
}

countUser();

/*
    Question 3: Find people who are MERN stack developer from the users object
*/

// Answer
const findMernStackDeveloper = () => {
    let findMern = [];
    for(const element in users){
        if(users[element]['skills'].includes('MongoDB', 'Express', 'React', 'Node')){
            findMern.push(element);
        }
    }
    console.log(`The users who are MERN stack developer are ${findMern}`);
    return findMern;
}

findMernStackDeveloper();

/*
    Question 4: Set your name in the users object without modifying the original users object
*/

// Answer
const copyUser = Object.assign({}, users);
copyUser.Habib = {
    email: 'habib@habib.com'
};
console.log(copyUser);

/*
    Question 5: Get all keys or properties of users object
*/

// Answer
const getAllUsersKeys = Object.entries(users);
console.log(getAllUsersKeys);

/*
    Question 6: Get all the values of users object
*/

// Answer
const getUsersValues = Object.values(users);
console.log(getUsersValues);

/*
    Question 7: Use the countries object to print a country name, capital, populations and languages.
*/

// Answer
const countries = {
    Nigeria: {
      capital: "Abuja",
      population: "14 million",
      languages: ["Hausa", "Yoruba", "Igbo"],
    },
    France: {
      capital: "Paris",
      population: "29 million",
      languages: ["French"],
    },
  };
console.log(countries);