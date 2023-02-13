// Exercise  Level 1

/*
    Question 1: Create a closure which has one inner function
*/

// Answer

const outerFucntion = () => {
    let count = 0;
    const addOne = () => {
        count++
        return count
    }
    return addOne()
}

const innerFunction = outerFucntion()
console.log(innerFunction)
