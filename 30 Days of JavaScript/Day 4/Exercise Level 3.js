// Exercise  Level 4

/* 
 Question 1: Write a program which tells the number of days in a month.

  ```sh
    Enter a month: January
    January has 31 days.

    Enter a month: JANUARY
    January has 31 day

    Enter a month: February
    February has 28 days.

    Enter a month: FEbruary
    February has 28 days.
  ```
*/

// Answer
let month = prompt('Enter a month').toLowerCase();
const mmonth = month.charAt(0).toUpperCase() + month.slice(1);
if(month==='September'.toLowerCase() || month==='April'.toLowerCase() || month==='June'.toLowerCase() || month==='November'.toLowerCase()){
    console.log(mmonth + ' has 30 days.');
}else if(month==='January'.toLowerCase() || month==='March'.toLowerCase() || month==='May'.toLowerCase() || month==='July'.toLowerCase()|| month==='August'.toLowerCase()|| month==='October'.toLowerCase()|| month==='December'.toLowerCase()){
    console.log(mmonth + ' has 31 days.');
} else if(month==='February'.toLowerCase()){
    console.log(mmonth + ' has 28 days.');
}else{
    console.log('Invalid Month Entered');
}

/* 
 Question 2: Write a program which tells the number of days in a month, now consider leap year.
*/

// Answer
let months = prompt('Enter a month').toLowerCase();
const mmonths = months.charAt(0).toUpperCase() + months.slice(1);
if(months==='September'.toLowerCase() || months==='April'.toLowerCase() || months==='June'.toLowerCase() || months==='November'.toLowerCase()){
    console.log(mmonths + ' has 30 days.');
}else if(months==='January'.toLowerCase() || months==='March'.toLowerCase() || months==='May'.toLowerCase() || months==='July'.toLowerCase()|| months==='August'.toLowerCase()|| months==='October'.toLowerCase()|| months==='December'.toLowerCase()){
    console.log(mmonths + ' has 31 days.');
} else if(months==='February'.toLowerCase()){
    console.log(mmonths + ' has 28 days and has 29 days in each leap year');
}else{
    console.log('Invalid Month Entered');
}
