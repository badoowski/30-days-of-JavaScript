// Exercise Level 2

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

/*
    Question 1: Find the total price of products by chaining two or more array iterators(eg.
         arr.map(callback).filter(callback).reduce(callback))
*/

// Answer
const totalPrice = products.map((product) => product.price).filter((price) => price > 0).reduce((acc, cur) => acc + cur);
console.log(totalPrice);

/*
    Question 2: Find the sum of price of products using only reduce reduce(callback))
*/

// Answer

/* const sumOfPrice = products.reduce((acc, cur) => acc + cur);
console.log(sumOfPrice);
*/

/*
    Question 3: Declare a function called **_categorizeCountries_** which returns an array of countries which have
     some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 
     'island','stan')).
*/

// Answer
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Italy', 'Spain', 'Germany', 'Portugal', 'England', 'Netherland', 'Belgium', 'France', 'Nigeria', 'U.S.A'];
const categorizeCountries = countries.filter((country) => country.includes('land') || country.includes('ia') || country.includes('island') || country.includes('stan'))
console.log(categorizeCountries);

/*
    Question 4: Create a function which return an array of objects, which is the letter and the number of times 
    the letter use to start with a name of a country.
*/

// Answer
const countriesIStartWith = countries.filter((country) => country.startsWith('I'));
console.log(countriesIStartWith)

/*
    Question 5: Declare a **_getFirstTenCountries_** function and return an array of ten countries. Use different 
    functional programming to work on the countries.js array
*/

// Answer
const getFirstTenCountries = (array) => {
    let n = 10;
   const firstTen = array.slice(0, n).map((country) => country)
    console.log(firstTen)
    return firstTen;
}
getFirstTenCountries(countries)

/*
    Question 6: Declare a **_getLastTenCountries_** function which which returns the last ten countries in 
    the countries array.
*/

// Answer
const getLastTenCountries = (array) => {
    let n = 10;
   const lastTen = array.slice(-n).map((country) => country)
    console.log(lastTen)
    return lastTen;
}

getLastTenCountries(countries)
/*
    Question 7: Find out which _letter_ is used many _times_ as initial for a country name from the countries 
    array (eg. Finland, Fiji, France etc)
*/

// Answer
const mostFrequentInitialLetter = (arr) =>{
 let frequentLetter = arr.map(([country]) => country).reduce((acc, val) => {   
    acc[val] = (acc[val] || 0 ) + 1;   
    return acc
},{});
  return Object.keys(frequentLetter).reduce((a, b) => frequentLetter[a] > frequentLetter[b] ? a : b)
}
console.log(mostFrequentInitialLetter(countries))
