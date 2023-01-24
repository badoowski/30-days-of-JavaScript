// Excercise Level 1

/*
    Question 1: Iterate 0 to 10 using for loop, do the same using while and do while loop
*/

// Answer

// for loop
for(let i = 0; i <= 10; i++){
    console.log(i);
}
// while loop
let i = 0;
while(i <= 10){
    console.log(i);
    i++;
}
// do while loop
let i = 0;
do{
    console.log(i);
    i++;
    }while(i <= 10);


/*
    Question 2: Iterate 10 to 0 using for loop, do the same using while and do while loop
*/

// Answer

// for loop
for(let i = 10; i >= 0; i--){
    console.log(i);
}
// while loop
let i = 10;
while(i >= 0){
    console.log(i);
    i--;
}
// do while loop
let i = 10;
do{
    console.log(i);
    i--;
    }while(i >= 0);

/*
    Question 3: Iterate 0 to n using for loop
*/

// Answer

const n = parseInt(prompt('Enter n value'));
for(let i = 0; i <= n; i++){
    console.log(i)
}

/*
    Question 4: Write a loop that makes the following pattern using console.log():

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```
*/

// Answer
let hash = '';
for(let i =  0; i < 7; i++){
    console.log(hash += '#');
}

/*
    Question 5: Use loop to print the following pattern:

   ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```
*/

// Answer
for(let i = 0; i <= 10; i++){
    console.log(`${i} * ${i} = ${i ** 2}`);
  }

  /*
    Question 6: Using loop print the following pattern

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```
*/

// Answer
console.log('i \t i^2 \t i^3')
for (i = 0; i <= 10; i++) {
    console.log(`${i} \t  ${i ** 2} \t ${i ** 3}`)
  }


/*
    Question 7: Use for loop to iterate from 0 to 100 and print only even numbers
*/

// Answer
for(let i = 0; i <= 100; i++){
    if(i % 2 == 0 && i > 1){
        console.log(i);
    }
    }

/*
    Question 8: Use for loop to iterate from 0 to 100 and print only odd numbers
*/

// Answer
for (let i = 0; i < 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

/*
    Question 9: Use for loop to iterate from 0 to 100 and print only prime numbers
*/

// Answer
let isPrime = true; 
for(let i=2; i <= 100; i++){
  for(let j=2; j < i - 1; j++){
    if(i % j == 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    console.log(i);
  }
  isPrime = true;
}

/*
    Question 10: Use for loop to iterate from 0 to 100 and print the sum of all numbers.

    ```sh
    The sum of all numbers from 0 to 100 is 5050.
    ```
*/

// Answer
let sum = 0;
for(let i = 0; i <= 100; i++){
   sum += i;
}
console.log('The sum of all numbers from 0 to 100 is ' + sum);


/*
    Question 11: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

    ```sh
    The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
    ```
*/

// Answer
let sumE = 0;
let sumO = 0;

for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? (sumE += i) : (sumO += i);
}

console.log('The sum of all evens from 0 to 100 is '+ sumE + '. And the sum of all odds from 0 to 100 is ' + sumO);

/*
    Question 12: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. 
    Print sum of evens and sum of odds as array

    ```sh
      [2550, 2500]
    ```
*/

// Answer
const arrSumE = [];
arrSumE.push(sumE, sumO);
console.log(arrSumE);

/*
    Question 13: Develop a small script which generate array of 5 random numbers
*/

// Answer
const ranArr = [];
for (let i = 0; i <= 4; i++){
let ranNum = Math.floor(Math.random() * 100);
    ranArr.push(ranNum);
}
console.log(ranArr);

/*
    Question 14: Develop a small script which generate array of 5 random numbers and the numbers must be unique
*/

// Answer
const ranUniqueArr = [];
for (let i = 0; i <= 4; i++){
let ranNum = Math.floor(Math.random() * 20);
    ranUniqueArr.push(ranNum);
}
console.log(ranUniqueArr);

/*
    Question 15: Develop a small script which generate a six characters random id:

    ```sh
    5j2khz
    ```
*/

// Answer

for(let i =  0; i < 1; i++){
    let ranId = Math.random().toString(36).substring(2,8);
	    console.log(ranId);

}
