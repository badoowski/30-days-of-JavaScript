// Exercise  Level 1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

/*
    Question 1: Explain the difference between **_forEach, map, filter, and reduce_**.
*/

// Answer
/*
    forEach: forEach takes a callback function with elements, index parameter and array but both index parameter
    and array are optional.

    map: map takes a callback function with elements, index parameter and array but return a new array.

    filter: filter filter out the items which satisfied the conditions and return a new array

    reduce: reduce takes a callback function that takes accumulator, current and optional initial value as a
    parameter and return a single value.
*/

/*
    Question 2: Define a callback function before you use it in forEach, map, filter or reduce.
*/

// Answer
/*
    Callback functions are functions that are passed through a higher order function
*/

/*
    Question 3: Use **_forEach_** to console.log each country in the countries array.
*/

// Answer

countries.forEach((country) => console.log(country));

/*
    Question 4: Use **_forEach_** to console.log each name in the names array.
*/

// Answer
names.forEach((name) => console.log(name));

/*
    Question 5: Use **_forEach_** to console.log each number in the numbers array.
*/

// Answer
numbers.forEach((num) => console.log(num));

/*
    Question 6: Use **_map_** to create a new array by changing each country to uppercase in the countries array.
*/

// Answer

const newCountries = countries.map((country) => country.toUpperCase());
console.log(newCountries);

/*
    Question 7: Use **_map_** to create an array of countries length from countries array.
*/

// Answer

const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

/*
    Question 8: Use **_map_** to create a new array by changing each number to square in the numbers array
*/

// Answer

const numberSquare = numbers.map((number) => number * number);
console.log(numberSquare);

/*
    Question 9: Use **_map_** to change to each name to uppercase in the names array
*/

// Answer

const upperName = names.map((name) => name.toUpperCase());
console.log(upperName);

/*
    Question 10: Use **_map_** to map the products array to its corresponding prices.
*/

// Answer

const productPrice = products.map((product) => `${product.product}: ${product.price}`);
console.log(productPrice);

/*
    Question 11: Use **_filter_** to filter out countries containing **_land_**.
*/

// Answer

const landCountries = countries.filter((country) => country.includes('land'));
console.log(landCountries);

/*
    Question 12: Use **_filter_** to filter out countries having six character.
*/

// Answer

const sixCharCountries = countries.filter((country) => country.length === 6 );
console.log(sixCharCountries);

/*
    Question 13: Use **_filter_** to filter out countries containing six letters and more in the country array.
*/

// Answer

const sixOrMoreCountries = countries.filter((country) => country.length >= 6 );
console.log(sixOrMoreCountries);

/*
    Question 14: Use **_filter_** to filter out country start with 'E';
*/

// Answer

const startWithE = countries.filter((country) => country.startsWith('E'));
console.log(startWithE);

/*
    Question 15: Use **_filter_** to filter out only prices with values.
*/

// Answer
const productPrice = products.filter(({ price }) => Number(price));
console.log(productPrice);


/*
    Question 16: Declare a function called getStringLists which takes an array as a parameter and then returns
    an array only with string items.
*/

// Answer
const getStringLists =  (arr) => {
    const str = arr.filter((name) => typeof name === 'string');
    return str
}

console.log(getStringLists(["Habib", 3, 5, "Hafiz"]))

/*
    Question 17: Use **_reduce_** to sum all the numbers in the numbers array.
*/

// Answer

const sumAll = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sumAll);

/*
    Question 18: Use **_reduce_** to concatenate all the countries and to produce this sentence:
     **_Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries_**
*/

// Answer
const sentence = countries.reduce(acc, cur, i) => {
    return i === 0
  ? acc + 'Estonia, ' + cur + ', '
  : i === countries.length - 1
  ? acc + 'and ' + cur + ' are north European countries.'
  : acc + cur + ', ';
}, ''};

console.log(sentence);
/*
    Question 19: Explain the difference between **_some_** and **_every_**
*/

// Answer
/*
    some: some checks if some elements are elements are similar in one aspect and return in boolean.

    every: every checks if all elements in an array are similar in all aspects and also return in boolean.
*/

/*
    Question 20: Use **_some_** to check if some names' length greater than seven in names array
*/

// Answer

const checkLengthInName = names.some((name) => typeof name.length > 7)
console.log(checkLengthInName);

/*
    Question 21: Use **_every_** to check if all the countries contain the word land
*/

// Answer

const everyCountries = countries.every((country) => country.includes('land'));
console.log(everyCountries);

/*
    Question 22: Explain the difference between **_find_** and **_findIndex_**.
*/

// Answer

/*
    find: find returns the first element that satisfied the condition given.

    findIndex: findIndex returns position of the first element that satisfied the condition given.
*/

/*
    Question 23: Use **_find_** to find the first country containing only six letters in the countries array
*/

// Answer
const findCountry = countries.find((country) => country.length === 6);
console.log(findCountry);

/*
    Question 24: Use **_findIndex_** to find the position of the first country containing only six letters 
    in the countries array
*/

// Answer

const findCountryIndex = countries.findIndex((country) => country.length === 6);
console.log(findCountryIndex)

/*
    Question 25: Use **_findIndex_** to find the position of **_Norway_** if it doesn't exist in the array 
    you will get -1.
*/

// Answer
const findNorwayIndex = countries.findIndex((country) => country.includes('Norway'));
console.log(findNorwayIndex)

/*
    Question 26: Use **_findIndex_** to find the position of **_Russia_** if it doesn't exist in the array 
    you will get -1.
*/

// Answer
const findRussiaIndex = countries.findIndex((country) => country.includes('Russia'));
console.log(findRussiaIndex)
