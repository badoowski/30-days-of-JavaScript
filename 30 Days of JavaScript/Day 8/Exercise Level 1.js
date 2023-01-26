// Exercise  Level 1

/*
    Question 1: Create an empty object called dog
*/

// Answer
const dog = {};

/*
    Question 2: Print the the dog object on the console
*/

// Answer
console.log(dog);

/*
    Question 3: Add name, legs, color, age and bark properties for the dog object. The bark property 
    is a method which return _woof woof_
*/

// Answer
    dog.name = 'Rex',
    dog.legs = 4,
    dog.color = 'black',
    dog.age = 2,
    dog.bark = function (){
        return 'woof woof';
    }

/*
    Question 4: Get name, legs, color, age and bark value from the dog object
*/

// Answer
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());


/*
    Question 5: Set new properties the dog object: breed, getDogInfo
*/

// Answer

dog.breed = 'Bull';
dog.getDogInfo = function (){
    let dogInfo = `Hi, i am ${this.name} and i am ${this.age} years old. i sound ${this.bark()} when i am happy`;
    return dogInfo;
}

console.log(dog.getDogInfo());