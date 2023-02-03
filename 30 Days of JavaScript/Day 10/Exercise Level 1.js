// Exercise Level 1

/*
    Question 1: create an empty set
*/

// Answer

const newSet = new Set()    // using the set() method to create a new set named 'newSet'
console.log(newSet);

/*
    Question 2: Create a set containing 0 to 10 using loop
*/

// Answer

const zeroToTenSet = new Set()
for(let i = 0; i <= 10; i++){   // looping i from 0 to 10
    zeroToTenSet.add(i)     // adding the value of each 'i' iteration as an element in the set
}
console.log(zeroToTenSet);

/*
    Question 3: Remove an element from a set
*/

// Answer
zeroToTenSet.delete(3); // using the delete() to remove an element from the set
console.log(zeroToTenSet)


/*
    Question 4: Clear a set
*/

// Answer
zeroToTenSet.clear();   // using the clear() method to remove everything in the set
console.log(zeroToTenSet)


/*
    Question 5: Create a set of 5 string elements from array
*/

// Answer
const array = ['Habib', 'Lekan', 'is', 'my', 'name'];   // an array of strings
const stringSet = new Set(array);   // using the set() method to convert the array into a set
console.log(stringSet);

/*
    Question 6: Create a map of countries and number of characters of a country
*/

// Answer
const countries = ['Nigeria', 'Ghana', 'USA', 'Canada', 'England'];
const countriesAndNumberOfStrings = countries.map((country) => `${country} ${country.length}`)
console.log(countriesAndNumberOfStrings);
