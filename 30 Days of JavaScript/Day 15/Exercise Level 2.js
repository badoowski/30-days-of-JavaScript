// Exercise  Level 2

/*
    Question 1: Override the method you create in Animal class
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

class Dog extends Animal{
    constructor(name, age, color, legs, gender){
        super(name, age, color, legs),
        this.gender = gender
    }

    getGender(){
        return this.gender
    }

    getFullInfo = () =>{
        return `${this.name} is a ${this.age} years old ${this.gender} dog, that is ${this.color} in color and have ${this.legs} legs`
    }
}

let puppy = new Dog('kelvin', 3, 'white', 4, 'male')   
console.log(puppy.getFullInfo())    // the getFullInfo() has been override by adding the gender value to it