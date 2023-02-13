// Exercise  Level 3

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

/*
    Question 1: Read the cats api and find the average weight of cat in metric unit.
*/

// Answer

const averageWeightInMetric = async () => {
    try{
        const response = await fetch(catsAPI)
        const catsDetails = await response.json()
        catsDetails.forEach((cat) => {
            catName = ''
            catName += `${cat.name} : ${cat.weight.metric}`
            console.log(catName)
                });
      
    } catch(err) {
        console.log(err)
    }
}

averageWeightInMetric()

/*
    Question 2: Read the countries api and find out the 10 largest countries
*/

// Answer

const tenLargestCountries = async () =>{
    try{
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        countries.sort(function(a,b){
            if (b.area < a.area) return -1
            if (b.area > a.area) return 1
            return 0
    })
            countryy = []
        countries.forEach((country) =>{
            countryy.push(`${country.name} : ${country.area} `)
    })
        console.log(countryy.slice(0,10))

    } catch(err){
        console.log(err);
    }
}

tenLargestCountries()

/*
    Question 3: Read the countries api and count total number of languages in the world used as officials.
*/

// Answer

const totalNumberOfLanguages = async () => {
    try{
        const langArray = []
        const response = await fetch(countriesAPI)
        const countries = await response.json()
            countries.forEach((country) =>{
                country.languages.forEach((language) =>{
                if (!langArray.includes(language)) {
                    langArray.push(language)
                }
            })
           })
           console.log(`Total Number of Languages in the world: ${langArray.length}`)
    } catch(err){
        console.log(err)
    }
}

totalNumberOfLanguages()