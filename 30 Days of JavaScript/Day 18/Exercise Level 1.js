// Exercise  Level 1

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

/*
    Question 1: Read the countries API using fetch and print the name of country, capital, languages, population and area.
*/

// Answer

const readCountriesAPI = async () =>{
    try{
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        countries.forEach((country) =>{
            countryy = ''
            countryy += `
            ${country.name}
            ${country.capital}
            ${country.languages}
            ${country.population}
            ${country.area}
            `
            console.log(countryy)
        })
    } catch(err){
        console.log(err);
    }
}

readCountriesAPI()