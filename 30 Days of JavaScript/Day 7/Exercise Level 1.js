// Exercise Level 1

/*
    Question 1: Declare a function _fullName_ and it print out your full name.
*/

// Answer
function fullName(){
    console.log('Salau Habib');
}

fullName();

/*
    Question 2: Declare a function _fullName_ and now it takes firstName, lastName as a parameter and
     it returns your full - name
*/

// Answer

function _fullName(firstName, lastName){
    const full_Name = firstName + ' ' + lastName;       // using the + sign to join the two parameters
    console.log(full_Name);
}

_fullName('Habib', 'Salau');

/*
    Question 3: Declare a function _addNumbers_ and it takes two two parameters and it returns sum.
*/

// Answer

function addNumber (number1, number2){
    const sum = number1 + number2;      // using the + sign to add the two parameters
    console.log(sum);
    return sum;
}
addNumber(4, 5);

/*
    Question 4: An area of a rectangle is calculated as follows: _area = length x width_. 
    Write a function which calculates _areaOfRectangle_
*/

// Answer

function areaOfRectangle (length, width){
    const area =  length * width;   // calculating the area of a rectangle
    console.log(area);
    return area;
}
 areaOfRectangle(5, 5);

 /*
    Question 5: A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_.
     Write a function which calculates _perimeterOfRectangle_.
*/

// Answer

function perimeter (length, width){
    const perimeter = 2 * (length + width);     // calculating the perimeter of a rectangle
    console.log(perimeter);
    return perimeter;
}

perimeter(5, 3);

/*
    Question 6: A volume of a rectangular prism is calculated as follows: _volume = length x width x height_. 
    Write a function which calculates _volumeOfRectPrism_
*/

// Answer

let volume = (length, width, height) => {
    volume = length * width * height;       // calculating the volume of a rectangular prism
    console.log(volume);
    return volume;
}

volume(2, 3, 4);

/*
    Question 7: Area of a circle is calculated as follows: _area = π x r x r_. Write a function which calculates
     _areaOfCircle_
*/

// Answer

let areaOfCircle = (radius) => {
    const π = 3.14;
    areaOfCircle = π * radius * radius;     // calculating the area of a cirlce
    console.log(areaOfCircle);
    return areaOfCircle;
}

areaOfCircle(5);


/*
    Question 8: Circumference of a circle is calculated as follows: _circumference = 2πr_. Write a function which 
    calculates _circumOfCircle_
*/

// Answer

 let circumOfCircle = (radius) => {
    const π = 3.14;
    circumOfCircle = 2 * π * radius; //calculating the circumference of a circle
    console.log(circumOfCircle);
    return circumOfCircle;
 }
 circumOfCircle(5);

 /*
    Question 9: Density of a substance is calculated as follows:_density= mass/volume_. Write a function which 
    calculates _density_.

*/

// Answer

let density = (mass, volum) => {
    density = mass / volum;     // calculating the value of density
    console.log(density);
    return density;
}

density(8, 4);

 /*
    Question 10: Speed is calculated by dividing the total distance covered by a moving object divided by the total
     amount of time taken. Write a function which calculates a speed of a moving object, _speed_.

*/

// Answer

let speed = (distance, time) => {
    speed = distance / time;        // calculating the speed of a moving object
    console.log(speed);
    return speed;
}

speed(400, 20);


/*
    Question 11: Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which
     calculates _weight_.

*/

// Answer
let weight = (mass) => {
    const gravity = 9.81;
    weight = mass * gravity;        // calculating the weight of a substance
    console.log(weight);
    return weight;
}
weight(800);

/*
    Question 12: Temperature in oC can be converted to oF using this formula: _oF = (oC x 9/5) + 32_. Write a 
    function which convert oC to oF _convertCelsiusToFahrenheit_.

*/

// Answer

const convertCelsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9 / 5) + 32;      // converting temperature from celsius to fahrenheit
    console.log(fahrenheit);
    return fahrenheit;
}
convertCelsiusToFahrenheit(36);


/*
    Question 13: Body mass index(BMI) is calculated as follows: _bmi = weight in Kg / (height x height) in m2_.
    Write a function which calculates _bmi_. BMI is used to broadly define different weight groups in adults 
    20 years old or older.Check if a person is _underweight, normal, overweight_ or _obese_ based the information
    given below.

    - The same groups apply to both men and women.
    - _Underweight_: BMI is less than 18.5
    - _Normal weight_: BMI is 18.5 to 24.9
    - _Overweight_: BMI is 25 to 29.9
    - _Obese_: BMI is 30 or more

*/

// Answer

const bodyMassIndex = (weightKG, height) => {
    const bmi = weightKG / (height * height);
    if(bmi < 18.5){
        console.log('Underweight: Your BMI (' + bmi + ') is less than 18.5');
    }else if(bmi >= 18.5 && bmi <= 24.9){
        console.log('Normal weight: Your BMI (' + bmi + ') is between 18.5 and 24.9');
    }else if( bmi >= 25 && bmi <= 29.9){
        console.log('Overweight: Your BMI (' + bmi + ') is between 25 and 29.9');
    } else{
        console.log('Obese: Your BMI (' + bmi + ') is 30 or above');
    }
    return bmi;
}

bodyMassIndex(65, 1.75);


/*
    Question 14: Write a function called _checkSeason_, it takes a month parameter and returns the season:Autumn, 
    Winter, Spring or Summer.

*/

// Answer

const checkSeason = (month) => {
    if(month === 'December' || month === 'January' || month === 'February'){
        console.log('The season is Winter');
    } else if(month === 'March' || month === 'April' || month === 'May'){
        console.log('The season is Spring');
    } else if(month === 'June' || month === 'July' || month === 'August'){
        console.log('The season is Summer');
    } else if(month === 'September' || month === 'October' || month === 'November'){
        console.log('The season is Autumn');
    } else{
        console.log('Month is invalid');
    }
    return month;
}

checkSeason('May');
