// Exercise Level 3

/*
    Question 1: Modify the _userIdGenerator_ function. Declare a function name _userIdGeneratedByUser_. 
    It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of
     characters and the second input is the number of ids which are supposed to be generated.

    ```sh
    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '
    ```
*/

// Answer

const userIdGeneratedByUser = () => {
    let idToBeGenerated = parseInt(prompt('Enter the number of ID to be generated'));	// Asked for the value of idToBeGenerated and use the parseInt to make sure the value is integer.
    let numberOfCharacters = parseInt(prompt('Enter the number of character of each ID')) + 2;	// Asked for the value of numberOfCharacters and us the parseInt to make sure the value is integer and also add 2 to it.
    let ranId = '';
    for(let i =  0; i < idToBeGenerated; i++){ // Iterate over the size of 'idToBeGenerate' 
       ranId = Math.random().toString(36).substring(2,numberOfCharacters); 	// Generate a random string in alphaNumberic and remove the first two (to make 2 added in the second line).
        console.log(ranId);
                            }
             return ranId;

}
userIdGeneratedByUser();


/*
    Question 2: Write a function name _rgbColorGenerator_ and it generates rgb colors.

    ```sh
    rgbColorGenerator()
    rgb(125,244,255)
    ```
*/

// Answer

const rgbColorGenerator = () => {
    const ranR = Math.floor(Math.random() * 255);		// Using Math.random to randomly generate numbers between 0 and 255 then using Math,floor to neglete the floating values.
    const ranG = Math.floor(Math.random() * 255);
    const ranB = Math.floor(Math.random() * 255);
    console.log('rgb(' + ranR+ ',' + ranG + ',' + ranB + ')');
}

rgbColorGenerator();

/*
    Question 3: Write a function **_arrayOfHexaColors_** which return any number of hexadecimal colors in an array.
*/

// Answer

const arrayOfHexaColors = (number) => {
    const arrOfHexa = [];
	let randomHexa = '';
	for(let i = 0; i < number; i++){
    randomHexa = '#' + Math.floor(Math.random()*16777215).toString(16);		// Looping within the argument length and randomly generating Hexa code
	arrOfHexa.push(randomHexa);
	}
		console.log(arrOfHexa);
	return arrOfHexa;
}
arrayOfHexaColors(5);

/*
    Question 4: Write a function **_arrayOfRgbColors_** which return any number of RGB colors in an array.
*/

// Answer

const arrayOfRgbColors = (number) => {
    const arrRgb = [];
    let ranR, ranG, ranB;
    for(let i = 0; i < number;  i++){
     ranR = Math.floor(Math.random() * 255);  // Using Math.random to randomly generate numbers between 0 and 255 then using Math,floor to neglete the floating values.
     ranG = Math.floor(Math.random() * 255);
     ranB = Math.floor(Math.random() * 255);
     arrRgb.push('rgb(' + ranR + ',' + ranG + ',' + ranB + ')')		// push the randomly generated number into the array named 'arrRgb'
    }
    console.log(arrRgb);
    return arrRgb;
}

arrayOfRgbColors(5);

/*
    Question 5: Write a function **_convertHexaToRgb_** which converts hexa color to rgb and it returns an 
    rgb color.
*/

// Answer
const convertHexaToRgb = (hexa) => {
    if(hexa.length != 6){
        console.log("Only six-digit hex colors are allowed.");
    }
    let aRgbHex = hexa.match(/.{1,2}/g); // used match() which returns an array to match the regular expression (/.{1,2}/g) which capture any one character between one to two digits.
    let aRgb = [
        parseInt(aRgbHex[0], 16),	// Convert hexa decimal value into integer
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    console.log('rgb(' + aRgb + ')');
    return aRgb;
}
convertHexaToRgb('1502BE');

/*
    Question 6: Write a function **_convertRgbToHexa_** which converts rgb to hexa color and it 
    returns an hexa color.
*/

// Answer

const convertRgbToHexa = (r, g, b) => {
    const valueToHex = (value) => {
        const hex = value.toString(16);		// convert the numeric string into an hexa value
		return hex.length == 1 ? "0" + hex : hex;	// if the hexa length is equal to 1, it will return string '0' plus hex value
    }    
   const rgbToHexa = valueToHex(r) + valueToHex(g) + valueToHex(b)	// merging the newly converted hexa value together
    console.log('#' + rgbToHexa.toUpperCase());
    return(rgbToHexa);
}

convertRgbToHexa(21, 2, 190);

/*
    Question 7: Write a function **_generateColors_** which can generate any number of hexa or rgb colors.

    ```js
    console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors('hexa', 1)) // '#b334ef'
    console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
    ```
*/

// Answer

const generateColors = (color, number) => {
    if(color == 'hexa'){
            const arrOfHexa = [];
            let randomHexa = '';
            for(let i = 0; i < number; i++){	// loop i within number length
            randomHexa = '#' + Math.floor(Math.random()*16777215).toString(16);	// Randomly generate an hexa code and removing the floating values that follows
            arrOfHexa.push(randomHexa);
            }
                console.log(arrOfHexa);
            return arrOfHexa;
        }
    else if(color == 'rgb'){
        const arrRgb = [];
    let ranR, ranG, ranB;
    for(let i = 0; i < number;  i++){	// loop i within number length
     ranR = Math.floor(Math.random() * 255); // Using Math.random to randomly generate numbers between 0 and 255 then using Math,floor to neglete the floating values.
     ranG = Math.floor(Math.random() * 255);
     ranB = Math.floor(Math.random() * 255);
     arrRgb.push('rgb(' + ranR + ',' + ranG + ',' + ranB + ')')
    }
    console.log(arrRgb);
    return arrRgb;
    }
}

    generateColors('hexa', 3);
    generateColors('hexa', 1);
    generateColors('rgb', 3);
    generateColors('rgb', 1);

/*
    Question 8: Call your function _shuffleArray_, it takes an array as a parameter and
     it returns a shuffled array
*/

// Answer
const shuffleArray = (array) => {
    let currentIndex = array.length,  randomIndex;
      while (currentIndex != 0) {	// while the currentIndex value is not equal to zero
    randomIndex = Math.floor(Math.random() * currentIndex); // Using Math.random to randomly generate numbers between 0 and currentIndex value then using Math,floor to neglete the floating values.
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];	// shuffle the array by interchanging the position each element in the array with the element next it to.
    }
    console.log(array);
  return array;
}    
shuffleArray([1, 2, 3, 4, 5, 6]);

/*
    Question 9: Call your function _factorial_, it takes a whole number as a parameter and it return a 
    factorial of the number
*/

// Answer
const factorial = (number) => {
    let fac = 1;
    if (number == 0 || number == 1){	// if number is equal to 0 or number is equal to 1
        console.log(number);	// print number
        return number;
      }
      else if(number > 1){	// if number is greater than 1
        for(let i = number; i >= 1; i--){ // looping the array starting from the number and looping in a decreamental form
          fac = fac * i;
        }
        console.log(fac);
        return fac;
      }
      else{
        console.log('number has to be positive');
      }  
}

factorial(5);

/*
    Question 10: Call your function _isEmpty_, it takes a parameter and it checks if it is empty or not
*/

// Answer
const isEmpty = (check) => {
    if (check.length === 0) {	// if the number of elements in the array is equal to zero
        console.log('It is empty')
        return true;
    } else{	// else if the number of elements in array is not equal to zero
        console.log('It is not empty')
        return false;
    }
}
const array  = [3, 4, 5, ,6, 7];
const arr = [];
isEmpty(array);
isEmpty(arr);

/*
    Question 11: Call your function _sum_, it takes any number of arguments and it returns the sum.
*/

// Answer

const sum = (...args) => {	// passing-in a rest parameter to accept an indefinite value
    let summ = 0;
    for (const element of args) {	// loop through every element in the parameter
      summ += element	// add each value of the elements to the initial value of sum
    }
    console.log(summ);
    return summ
}

sum(2, 4, 5, 3);

/*
    Question 12: Write a function called _sumOfArrayItems_, it takes an array parameter and return the 
    sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
*/

// Answer
const sumOfArrayItems = (array) => {
    let summ = 0;
    for (const element of array) {	// loop through every element in the parameter
        if(typeof element === 'number'){	// if the type of elements in the parameter passed-in is in numeric form
            summ += element;	// add each value of the elements to the initial value of sum
        }
    else {
        console.log('The array have other datatypes other than numbers')
        break;
    }
}
    console.log('The sum of all the numbers in the array is: ' + summ);
    return summ
}

sumOfArrayItems([2, 3, 4]);

/*
    Question 13: Write a function called _average_, it takes an array parameter and returns the average of the
     items. Check if all the array items are number types. If not give return reasonable feedback.
*/

// Answer
const average = (array) => {
    let summ = 0;
    for (const element of array) {
        if(typeof element === 'number'){
            summ += element;
            averagee = summ / array.length;
        }
    else {
        console.log('The array have other datatypes other than numbers')
        break;
    }
}
    console.log('The average of all the numbers in the array is: ' + averagee);
    return averagee
}

average([2, 3, 4]);

/*
    Question 14: Write a function called _modifyArray_ takes array as parameter and modifies the fifth item of
     the array and return the array. If the array length is less than five it return 'item not found'.
*/

// Answer
const modifyArray = (array) => {
    if(array.length > 4){	// if the number of elements in the array is greater than 4
   array[4] = array[4].toUpperCase();	// converting the element in the fourth index to upper case
  console.log(array);

    } else {
        console.log('item not found');
    }
return array;

}

modifyArray(['boy', 'girl', 'mom', 'dad', 'sis']);
modifyArray(['boy', 'girl', 'mom']);

/*
    Question 15: Write a function called _isPrime_, which checks if a number is prime number.
*/

// Answer
const isPrime = (number) => {
    let store  = [];
    let primes = [];
    for (let i = 2; i <= number; ++i) 	// looping i within the size of parameter 'number'
    {
        if (!store [i])
          {
            primes.push(i);
            for (let j = i < 1; j <= number; j += i) 
            {
                store[j] = true;
            }
        }
    }
    console.log(primes)
    return primes;
}

isPrime(100);

/*
    Question 16: Write a functions which checks if all items are unique in the array.
*/

// Answer

const isUnique = (username) => {
    const array = ['Habib', 'Lekan'];
    for(let i = 0; i < array.length; i++){ 	// loop within the length of the array
        if(array[i] === username){	// checks if the parameter 'username' already exist in the array
            console.log('username already exist');
            break;
        }else{
            array.unshift(username);	// add the parameter 'username' to the array
            console.log(username + ' is added successfully')
        console.log(array);
        break;
        }  
        }        
        return array;
    }

isUnique('Habib');


/*
    Question 17: Write a function which checks if all the items of the array are the same data type.
*/

// Answer

const check = (array) => { 	// array is passed in as a parameter
    let arr = '';
    arr = new Set(array.map(x => typeof x)).size <= 1;	//map function is used to check if all the elements in the array are of the same datatype
    console.log(arr);
    return arr;
}

check(['Habib', 5, 'Hafiz']);
check([3, 4, 5]);

/*
    Question 18: JavaScript variable name does not support special characters or symbols except \$ or \_. 
    Write a function **isValidVariable** which check if a variable is valid or invalid variable.
*/

// Answer

const isValidVariable = (variable) => {
    let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; 		//listing special character values
if(format.test(variable)){		// checks if the parameter 'variable' is among any of the listed special characters
    console.log('Invalid Variable')
  return true;
} else {
    console.log('Valid Variable')
  return false;
}

}

isValidVariable('zd@kn');
isValidVariable('sajk');


/*
    Question 19: Write a function which returns array of seven random numbers in a range of 0-9. All the
     numbers must be unique.

    ```js
    sevenRandomNumbers()
    [(1, 4, 5, 7, 9, 8, 0)]
    ```
*/

// Answer

const sevenRandomNumbers = () => {
    let numbers = []
    for (let i = 0; i < 9; i++){	// loops the code within the 'for' statement nine times
        let ranNum = Math.floor(Math.random() * 10);	// generate random number between 0 and 9
            numbers.push(ranNum); // push the random number generated into the array 'numbers'
        }
        console.log(numbers);
        return numbers;
}
sevenRandomNumbers();

/*
    Question 20: Write a function called reverseCountries, it takes countries array and first it copy the array 
    and returns the reverse of the original array
*/

// Answer

const reverseCountries = (array) => {
    let copyArray = [];
    copyArray = [...array];	// copy all the elements in the parameter 'array' into the array 'copyArray' without altering the 'array'
    console.log(copyArray);
    array.reverse();	// used the reverse () method to reverse the elements of the array
    console.log(array);
}

reverseCountries([1, 2, 3]);
