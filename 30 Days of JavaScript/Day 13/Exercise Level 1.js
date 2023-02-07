// Exercise  Level 1
require ('./countries_data.js')

/*
    Question 1: Display the countries array as a table
*/

// Answer

//console.table(countries)

/*
    Question 2: Display the countries object as a table
*/

// Answer
//console.table(countries, ['name', 'capital', 'population', 'languages', 'currency'])

/*
    Question 3: Use console.group() to group logs
*/

// Answer
console.group('Countries')
console.log(countries)
console.groupEnd()