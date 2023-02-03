// Exercise  Level 2

const A = [1, 2, 3, 4, 5];  // Array A
const B = [4, 5, 6, 7, 8];  // Array B

/*
    Question 1: Find a union b
*/

// Answer
const union = [...A, ...B]  // union of Array A and Array B
const c = new Set(union);
console.log(c);

/*
    Question 2: Find a intersection b
*/

// Answer

const a = new Set(A);
const b = new Set(B);
const intersection = A.filter((num) =>  b.has(num));    // finding the intersection of A and B
console.log(intersection)

/*
    Question 3: Find a with b
*/

// Answer
const aWithB = A.concat(B)
console.log(aWithB);