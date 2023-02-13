// Exercise Level 2

/*
    Question 1: Create a closure which has three inner functions
*/

//Answer
const outerFucntion = () => {
    let count = 0
    const addOne = () => {
        count++
        return count
    }
    const addTwo = () => {
        count += 2
        return count
    }
    const minusOne = () => {
        count--
        return count
    }
    return addOne(), addTwo(), minusOne()
}

const outerFunc = outerFucntion()
console.log(outerFunc)