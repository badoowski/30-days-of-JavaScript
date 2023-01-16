// Exercise Level 1

/* 
 Question 1: Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to
  it and use the typeof operator to check different data types.
*/

// Answer

const firstName = "Habib";
const lastName = "Lekan";
const country = "India";
const city = "Bengaluru";
const age = 25;
const isMarried = true;
const year = new Date();

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

/* 
 Question 2: Check if type of '10' is equal to 10
*/

// Answer

console.log(typeof `10`===10);


/* 
 Question 3: Check if parseInt('9.8') is equal to 10
*/

// Answer

console.log(parseInt('9.8')===10);

/* 
 Question 4: Boolean value is either true or false.
   1. Write three JavaScript statement which provide truthy value.
   2. Write three JavaScript statement which provide falsy value.
*/

// Answer 1
console.log(2 < 3);
console.log(3 !== 4);
console.log(5 > 4);

// Answer 2
console.log(2 > 3);
console.log(3 === 4);
console.log(5 < 4);


/* 
 Question 5: Figure out the result of the following comparison expression first without using console.log(). After you decide the 
 result confirm it using console.log()
   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'
   12. Find the length of python and jargon and make a falsy comparison statement.
*/

// Answer 1
console.log(4 > 3);
// Answer 2
console.log(4 >= 3);
// Answer 3
console.log(4 < 3);
// Answer 4
console.log(4 <= 3);
// Answer 5
console.log(4 == 4);
// Answer 6
console.log(4 === 4);
// Answer 7
console.log(4 != 4);
// Answer 8
console.log(4 !== 4);
// Answer 9
console.log(4 != '4');
// Answer 10
console.log(4 == '4');
// Answer 11
console.log(4 === '4');
// Answer 12
console.log('python'.length);
console.log('jargon'.length);
console.log('python'.length !== 'jargon'.length);


/* 
 Question 6: Figure out the result of the following expressions first without using console.log(). After you decide the result confirm
  it by using console.log()
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. There is no 'on' in both dragon and python
*/

// Answer 1
const a = 4 > 3 && 10 < 12;
console.log(4 > 3 && 10 < 12);
// Answer 2
const b = 4 > 3 && 10 > 12;
console.log(4 > 3 && 10 > 12);
// Answer 3
const c = 4 > 3 || 10 < 12;
console.log(4 > 3 || 10 < 12);
// Answer 4
const d = 4 > 3 || 10 > 12;
console.log(4 > 3 || 10 > 12);
// Answer 5
const e = !(4 > 3);
console.log(!(4 > 3));
// Answer 6
const f =!(4 < 3);
console.log(!(4 < 3));
// Answer 7
const g =!(false);
console.log(!(false));
// Answer 8
const h =!(4 > 3 && 10 < 12);
console.log(!(4 > 3 && 10 < 12));
// Answer 9
const i =!(4 > 3 && 10 < 12);
console.log(!(4 > 3 && 10 < 12));
// Answer 10
const j =!(4 === '4');
console.log(!(4 === '4'));
// Answer 11
console.log('dragon'.includes('on') && 'python'.includes('on'));

/* 
 Question 7: Use the Date object to do the following activities
   1. What is the year today?
   2. What is the month today as a number?
   3. What is the date today?
   4. What is the day today as a number?
   5. What is the hours now?
   6. What is the minutes now?
   7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

// Answer 1
var now = new Date();
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
var yearr = today.getFullYear();
console.log(yearr);
// Answer 2
var month = today.getMonth() + 1;
console.log(month);
// Answer 3
console.log(now);
// Answer 4
var day = today.getDay();
console.log(day);
// Answer 5
var hours = now.getHours();
console.log(hours);
// Answer 6
var minutes = now.getMinutes();
console.log(minutes);
// Answer 7
var seconds = now.getTime();
console.log(seconds);
