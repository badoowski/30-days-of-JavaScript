//Exercise Level 2

/*
Question 1: Using console.log() print out the following statement:

    ```sh
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.
    ' by John Holmes teaches us to help one another.
    ```
*/

// Answer

console.log("The quote '\There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.");


/*
Question 2: Using console.log() print out the following quote by Mother Teresa:

    ```sh
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the 
    same -- with charity you give love, so don't just give money but reach out your hand instead."
    ```
*/

// Answer

console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");


/*
Question 3: Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
*/

// Answer

const a = "10";
const b = 10;
console.log(a === b);
const c = Number(a);
console.log(typeof c);
console.log(c === b);


/*
Question 4: Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
*/

// Answer

const num = parseFloat('9.8');
console.log(num === 10);
const rd = Math.round(num);
console.log(rd === 10);


/*
Question 5: Check if 'on' is found in both python and jargon
*/

// Answer

console.log("python".includes("on"));
console.log("jargon".includes("on"));


/*
Question 6: _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
*/

// Answer

console.log("I hope this course is not full of jargon".includes("jargon"));


/*
Question 7: Generate a random number between 0 and 100 inclusively.
*/

// Answer

const randomNum = Math.random()         // generates 0 to 0.999
const numBtnZeroAndHundred = randomNum * 101;
console.log(Math.floor(numBtnZeroAndHundred));


/*
Question 8: Generate a random number between 50 and 100 inclusively.
*/

// Answer

const numBtnfiftyAndHundred = Math.floor(Math.random() * 51) + 50;
console.log(numBtnfiftyAndHundred);


/*
Question 9: Generate a random number between 0 and 255 inclusively.
*/

// Answer

const numBtnZeroAndTwoFiveFive = randomNum * 256;
console.log(Math.floor(numBtnZeroAndTwoFiveFive));


/*
Question 10: Access the 'JavaScript' string characters using a random number.
*/

// Answer

const word ="JavaScript";
console.log(word[Math.floor(Math.random() * word.length)]);


/*
Question 11: Use console.log() and escape characters to print the following pattern.

    ```js
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    ```
*/

// Answer

console.log(" 1 \t 1 \t 1 \t 1 \t 1 \n 2 \t 1 \t 2 \t 4 \t 8 \n 3 \t 1 \t 3 \t 9 \t 27 \n 4 \t 1 \t 4 \t 16 \t 64\n 5 \t 1 \t 5 \t 25 \t 125");


/*
Question 12: Use __substr__ to slice out the phrase __because because because__ from
 the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
*/

// Answer

console.log(sentence.substr(31,23));
