// Exercise  Level 1
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

/*
    Question 1: Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
*/

// Answer

const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

/*
    Question 2: Destructure and assign the elements of countries array to fin, est, sw, den, nor
*/

// Answer

const [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)

/*
    Question 3: Destructure the rectangle object by its properties or keys.
*/

// Answer

const {width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)