// Exercise Level 1

/*
Question 1: Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.
*/

// Answer

const challenge = "30 Days Of JavaScript";


/*
Question 2: Print the string on the browser console using __console.log()__
*/

// Answer

console.log(challenge);


/*
Question 3: Print the __length__ of the string on the browser console using _console.log()_
*/

// Answer

console.log(challenge.length);


/*
Question 4: Change all the string characters to capital letters using __toUpperCase()__ method
*/

// Answer

console.log(challenge.toUpperCase());


/*
Question 5: Change all the string characters to lowercase letters using __toLowerCase()__ method
*/

// Answer

console.log(challenge.toLowerCase());


/*
Question 6: Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
*/

// Answer

console.log(challenge.substr(0,1));


/*
Question 7: Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.
*/

// Answer

console.log(challenge.substring(3));


/*
Question 8: Check if the string contains a word __Script__ using __includes()__ method
*/

// Answer

console.log(challenge.includes("Script"));


/*
Question 9: Split the __string__ into an __array__ using __split()__ method

*/

// Answer

console.log(challenge.split());


/*
Question 10: Split the string 30 Days Of JavaScript at the space using __split()__ method
*/

// Answer

console.log(challenge.split(" "));


/*
Question 11: 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ 
the string at the comma and change it to an array.
*/

// Answer
const string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(string.split(','));
/*
Question 12: Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.
*/

// Answer
console.log(challenge.replace('JavaScript', 'Python'));
/*
Question 13: What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.
*/

// Answer

console.log(challenge.charAt(15));


/*
Question 14: What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__
*/

// Answer

console.log(challenge.charCodeAt(11));


/*
Question 15: Use __indexOf__ to determine the position of the first occurrence of __a__ in 30 Days Of JavaScript
*/

// Answer

console.log(challenge.indexOf('a'));


/*
Question 16: Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in 
30 Days Of JavaScript.
*/

// Answer

console.log(challenge.lastIndexOf('a'));


/*
Question 17: Use __indexOf__ to find the position of the first occurrence of the word __because__ 
in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
*/

// Answer

const sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));


/*
Question 18: Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ 
in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
*/

// Answer

console.log(sentence.lastIndexOf('because'));


/*
Question 19: Use __search__ to find the position of the first occurrence of the word __because__ in the 
following sentence:__'You cannot end a sentence with because because because is a conjunction'__
*/

// Answer

console.log(sentence.search('because'));


/*
Question 20: Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g 
' 30 Days Of JavaScript '.
*/

// Answer

cpnst newString = ' 30 Days Of JavaScript ';
console.log(newString.trim());


/*
Question 21: Use __startsWith()__ method with the string *30 Days Of JavaScript* and make the result true
*/

// Answer

console.log(challenge.startsWith("30"));


/*
Question 22: Use __endsWith()__ method with the string *30 Days Of JavaScript* and make the result true
*/

// Answer

console.log(challenge.endsWith("Script"));


/*
Question 23: Use __match()__ method to find all the __a__’s in 30 Days Of JavaScript
*/

// Answer

console.log(challenge.match("a"));


/*
Question 24: Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
*/

// Answer

console.log("30 days of".concat("JavaScript"));


/*
Question 25: Use __repeat()__ method to print 30 Days Of JavaScript 2 times
*/

// Answer

console.log(challenge.repeat(2));



