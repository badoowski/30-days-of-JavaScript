// Exercise  Level 3

/*
    Question 1: The following is an array of 10 students ages:

    ```js
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    ```

    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use _abs()_ method
*/
// Answer 1
    
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);
const min = ages[0];
console.log(min);
const max = ages[ages.length -1];
console.log(max);

// Answer 2
const med1 = ages[3];
const med2 = ages[6];
const med = (med1 + med2)/2;
const medianAge = Math.floor(med);
console.log(medianAge);

// Answer 3
// how to add all array element together in javascript
const sum = ages.reduce((a, b) => a + b);
const ave = sum / ages.length;
console.log(ave);


// Answer 4

const range = max - min;
console.log(range);

// Answer 5

const minAv = Math.abs(min - ave);
console.log(minAv);
const maxAv =  Math.abs(max - ave);
console.log(maxAv);
