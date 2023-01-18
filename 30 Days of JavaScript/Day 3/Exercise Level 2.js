// Exercise Level 2

/* 
 Question 1: Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle
  (area = 0.5 x b x h).

   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
   ```
*/

// Answer

let base = parseInt(prompt('Enter the value of base', ''));
let height = parseInt(prompt('Enter the value of height', ''));
const area = base * height * 0.5;
console.log('The area of the triangle is ' + area);

/* 
 Question 2: Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the
  perimeter of triangle (perimeter = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   ```
*/

// Answer
let a = parseInt(prompt('Enter the value of a'));
let b = parseInt(prompt('Enter the value of b'));
let c = parseInt(prompt('Enter the value of c'));
const perimeter = a + b + c;
console.log('The perimeter of the triangle is ' + perimeter);

/* 
 Question 3: Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter
    of rectangle (perimeter = 2 x (length + width))
*/

// Answer
let length = parseInt(prompt('Enter the value of the length'));
let width = parseInt(prompt('Enter the value of the width'));
const areaOfRec = length * width;
const perimeterOfRec = 2 * (length + width);
console.log('The area of rectangle is ' + areaOfRec + ' and the perimeter of the rectangle is ' + perimeterOfRec);

/* 
 Question 4: Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a
  circle(c = 2 x pi x r) where pi = 3.14.
*/

// Answer
let radius = parseInt(prompt('Enter the value of the radius'));
const pi = 3.14;
const areaOfCir = pi * radius * radius;
const cirCir = 2 * pi *radius;
console.log('The area of the circle is ' + areaOfCir + ' and the circumference of the circle is ' + cirCir); 

/* 
 Question 5: Calculate the slope, x-intercept and y-intercept of y = 2x -2
*/

// Answer
const slope = 2;
const xIntercept = -2;
const yIntercept = 0;

/* 
 Question 6: Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>).
  Find the slope between point (2, 2) and point(6,10)
*/

// Answer
const y1 = 2;
const x1 = 2;
const y2 = 10;
const x2 = 6;
const m = (y2 - y1) / (x2 - x1);
console.log(m);

/* 
 Question 7: Compare the slope of above two questions.
*/

// Answer
console.log(slope===m);

/* 
 Question 8: Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different
  x values and figure out at what x value y is 0.
*/

// Answer
let x = parseInt(prompt('Enter the value of the x'));
const y = ((x*x) + (6*x) + 9);
console.log(y);
// y value is 0 when x value is -3

/* 
 Question 9: Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
    ```
*/

// Answer

let hours = parseInt(prompt('Enter the number of hours'));
let ratePerHour = parseInt(prompt('Enter the number of rate per hour'));
const weeklyEarn = hours * ratePerHour;
console.log('Your weekly earning is ' + weeklyEarn);


/* 
 Question 10: If the length of your name is greater than 7 say, your name is long else say your name is short.
*/

// Answer
let nameL = prompt('Enter your name');
if (nameL.length > 7){
   console.log('your name is long');
      }
else {
   console.log('your name is short');
   }

/* 
 Question 11: Compare your first name length and your family name length and you should get this output.

    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```

    ```sh
    Your first name, Asabeneh is longer than your family name, Yetayeh
    ```
*/
// Answer
const firstName = 'Asabeneh';
const lastName = 'Yetayeh';
if (firstName.length > lastName.length){
   console.log('Your first name, ' +firstName + ' is longer than your family name, ' + lastName);
}
else{
   console.log('Your first name, ' +firstName +  ' is shorter than your family name, ' +lastName);
}

/* 
 Question 12: Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.

   ```js
   let myAge = 250
   let yourAge = 25
   ```

   ```sh
   I am 225 years older than you.
   ```
*/

// Answer
const myAge = 250;
const yourAge = 25;
const ageDiff = myAge - yourAge;
console.log('I am ' + ageDiff + ' years older than you');
   
/* 
 Question 13: Using prompt get the year the user was born and if the user is 18 or above allow the user to drive
  if not tell the user to wait a certain amount of years.

    ```sh

    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
    ```
*/

// Answer
let birthYear = parseInt(prompt('Enter your birth year'));
const userAge = now.getFullYear() - birthYear;
const lessAge = 18 - userAge;
if(userAge >= 18){
   console.log('You are ' + userAge + '. You are old enough to drive');
}
else{
   console.log('You are ' + userAge + '. You will be allowed to drive after ' + lessAge + ' years');
}

/*
Question 14: Write a script that prompt the user to enter number of years. Calculate the number of seconds a person
 can live. Assume some one lives just hundred years

   ```sh
   Enter number of years you live: 100
   You lived 3153600000 seconds.
   ```
*/

// Answer
let yearNum = parseInt(prompt('Enter number of years'));
const minAYear = 31536000;
const aliveSec = yearNum * minAYear;
console.log(aliveSec);

/*
Question 15: Create a human readable time format using the Date time object
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm
*/

// Answers
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
//1
console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
//2
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
//3
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
