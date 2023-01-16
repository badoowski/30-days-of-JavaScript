// Exercise Level 2

/* 
 Question 1: Write a code which  can give grades to students according to theirs scores:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F

*/

// Answer
let score = parseInt(prompt('Enter your score'));
if(score < 50){
    console.log('You got a F');
}else if(score >= 50 && score<60){
    console.log('You got a D');
}else if(score >= 60 && score<70){
    console.log('You got a C');
}else if(score >= 70 && score<80){
    console.log('You got a B');
}else {
    console.log('You got an A');
}

/* 
 Question 2:  Check if the season is Autumn, Winter, Spring or Summer.
   If the user input is :
   - September, October or November, the season is Autumn.
   - December, January or February, the season is Winter.
   - March, April or May, the season is Spring
   - June, July or August, the season is Summer

*/

// Answer
let season = prompt('Enter the month');
if(season === 'September' || season === 'October' || season === 'November'){
    console.log('The season is Autumn');
}else if(season === 'January' || season === 'February' || season === 'December'){
    console.log('The season is Winter');
}else if(season === 'July' || season === 'June' || season === 'August'){
    console.log('The season is Summer');
}else if(season === 'March' || season === 'April' || season === 'May'){
    console.log('The season is Autumn');
}
else{
    console.log('Month is invalid');
}

/* 
 Question 3:  Check if a day is weekend day or a working day. Your script will take day as an input.

```sh
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
  ```
*/

// Answer
let day = prompt('Enter the day').toLowerCase();
let dday = day.charAt(0).toUpperCase() + day.slice(1);
if(day==='Monday'.toLowerCase() || day==='Tuesday'.toLowerCase() || day==='Wednesday'.toLowerCase() || day==='Thursday'.toLowerCase() || day==='Friday'.toLowerCase()){
    console.log(dday + ' is a working day');
}else if(day==='Saturday'.toLowerCase() || day==='Sunday'.toLowerCase()){
    console.log(dday + ' is a weekend');
} else{
    console.log('Invalid day entered');
}
