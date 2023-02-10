// Exercise  Level 1

/*
    Question 1: Create an Animal class. The class will have name, age, color, legs properties and create different methods
*/

// Answer

class Animal {
    constructor(name, age, color, legs){
    this.name = name,
    this.age = age,
    this.color = color,
    this.legs = legs
    }
    getFullInfo = () =>{
        return `${this.name} is ${this.age} years old, ${this.color} in color and have ${this.legs} legs`
    }

    get getAge(){
        return this.age
    }

    set addLegs(legs){
        this.legs += legs
    }
}

let animalOne = new Animal("jack", 4, "brown", 4);
let animalTwo = new Animal("brie", 2, "white", 4);

console.log(animalOne.getFullInfo());
console.log(animalTwo);

/*
    Question 2: Create a Dog and Cat child class from the Animal Class.
*/

// Answer

class Dog extends Animal{
    dogSound(){
        console.log('Woof Woof')
    }
}

class Cat extends Animal{
    catSound(){
        console.log('Mewn Mewn')
    }
}

let puppy = new Dog('kelvin', 3, 'white', 4)
let tom = new Cat('Tom', 2, 'black', 3)

console.log(puppy.dogSound())
console.log(tom.catSound())
console.log(tom.getFullInfo())