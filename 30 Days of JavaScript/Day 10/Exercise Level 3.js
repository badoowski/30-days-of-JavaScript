// Exercise  Level 3


require('./countries.js');


/*
    Question 1: How many languages are there in the countries object file.
*/

// Answer
const totalLanguages = () => {
    let count = 0;
    for(let i = 0; i < countries.length; i++){
        count++
    }
    console.log(count)
}
totalLanguages()

/*
    Question 2: Use the countries data to find the 10 most spoken languages:

```js
   // Your output should look like this
   console.log(mostSpokenLanguages(countries, 10))
   [
     { English: 91 },
     { French: 45 },
     { Arabic: 25 },
     { Spanish: 24 },
     { Russian: 9 },
     { Portuguese: 9 },
     { Dutch: 8 },
     { German: 7 },
     { Chinese: 5 },
     { Swahili: 4 },
     { Serbian: 4 }
   ]

  // Your output should look like this
  console.log(mostSpokenLanguages(countries, 3))
  [
  {English:91},
  {French:45},
  {Arabic:25}
  ]
*/

// Answer

const mostSpokenLanguage = (arr, num) => {
    const countLanguages = new Map();
    arr.forEach(country => {
        country.languages.forEach(lang => {
            if(!countLanguages.has(lang)){
            countLanguages.set(lang, 1);
        }
        else countLanguages.set(lang, countLanguages.get(lang) + 1);
    })
    
})
function Comparator(a, b) {
    if (b[1] < a[1]) return -1;
    if (b[1] > a[1]) return 1;
    return 0;
  }

const sorted = [...countLanguages.entries()].sort(Comparator);
for (let i = 0; i < sorted.length; i++){
     [lang, count] = sorted[i];  
}
console.log(sorted.slice(0,num))
return sorted
}
mostSpokenLanguage(countries, 10)