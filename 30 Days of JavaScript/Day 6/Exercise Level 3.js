// Excercise Level 3
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

/*
    Question 1: Copy countries array(Avoid mutation)
*/

// Answer
const copyCountries = [...countries];
console.log(copyCountries);


/*
    Question 2: Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array 
    and store in a variable sortedCountries
*/

// Answer
copyCountries.sort();
const sortedCountries = copyCountries
console.log(sortedCountries)

/*
    Question 3: Sort the webTechs array and mernStack array
*/

// Answer
webTechs.sort();
mernStack.sort();
console.log(webTechs);
console.log(mernStack);