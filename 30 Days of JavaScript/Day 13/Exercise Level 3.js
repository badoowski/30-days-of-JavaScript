// Exercise  Level 3
require('./countries_data.js')
/*
    Question 1: Check the speed difference among the following loops: while, for, for of, forEach
*/

// Answer
// while loop
console.time('while loop')
let i = 0;
while(i < countries.length){
console.log(countries[i])
i++
}
console.timeEnd('while loop')

// for loop
console.time('for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i])
}
console.timeEnd('for loop')

// for-of loop
console.time('for-of loop')
for (const country of countries) {
  console.log(country)
}
console.timeEnd('for-of loop')

//forEach loop
console.time('forEach loop')
countries.forEach((country) => {
  console.log(country)
})
console.timeEnd('forEach loop')