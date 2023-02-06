// Exercise Level 1

/*
    Question 1: Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from 
    salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
*/

// Answer

const text  = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
let totalAnnualIncome = 0
let salaries = text.match(/\d+/g)
salaries.forEach((salary) => totalAnnualIncome += Number(salary))
console.log(totalAnnualIncome);

/*
    Question 2: The position of some particles on the horizontal x-axis -12, -4, -3 and  -1 in the negative 
    direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between 
    the two furthest particles.
*/

// Answer

const secondText  = 'The position of some particles on the horizontal x-axis -12, -4, -3 and  -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction';
let pointSorting = secondText.match(/\d+/g) // Extract all numbers from the secondText and returning it as a string in an array
pointSorting = pointSorting.map((element) => Number(element));  // used map method to convert the string array to a numeric array

const distBtwTwoFurPart = (array) => {  // declaring a function to calculate the distance between the two furthest particles
    let distBtwTwo = array[array.length - 1] - array[0];    // the last particle in the array is subtracted from the first particle in the array
    return distBtwTwo
}
console.log(distBtwTwoFurPart(pointSorting))

/*
    Question 3: Write a pattern which identify if a string is a valid JavaScript variable

    ```sh
    is_valid_variable('first_name') # True
    is_valid_variable('first-name') # False
    is_valid_variable('1first_name') # False
    is_valid_variable('firstname') # True
*/

// Answer

const isValidVariable = (variable) => {
    const pattern = /[F/f]irst[N/n]ame|[F/f]irst_[N/n]ame/g
    console.log(pattern.test(variable))
}

isValidVariable('first_name') 
