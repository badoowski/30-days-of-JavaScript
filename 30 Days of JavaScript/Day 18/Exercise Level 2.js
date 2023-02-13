// Exercise  Level 2

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

/*
    Question 1: Print out all the cat names in to catNames variable.
*/

// Answer

const printCatNames = async () =>{
    try{
        const response = await fetch(catsAPI)
        const catNames = await response.json()
        catNames.forEach(cat => {
            catName = ''
            catName += `${cat.name}`
            console.log(catName)
        });
    } catch(err){
        console.log(err)
    }
}

printCatNames()