const input = document.querySelector('input')
const button = document.querySelector('button')
const select = document.querySelector('select')
const flexContainer = document.querySelector('.flex-container')
const image = document.querySelector('img')
const error = document.querySelector('p')
const result = document.createElement('div')
const resultVal = document.createElement('div')
const resultContainer = document.createElement('div')
const resultDiv = document.createElement('div')


//styling

resultContainer.append(result, resultVal)




flexContainer.append(error, resultContainer, resultDiv)

// importing planets values
button.addEventListener('click', () => {
    let enteredValue = input.value
    let seletedPlanet = select.options[select.selectedIndex].innerText
    if (enteredValue === '') {
        error.style.margin = '10rem 7rem'
        error.style.backgroundColor = 'rgba(103, 93, 103, 0.43)'
        error.style.padding = '2rem 2rem 2rem 2rem'
        error.style.width = '40%'
        error.style.textAlign = 'center'
        error.style.fontSize = '25px'
        error.style.color = 'white'
        error.textContent = 'Mass is required'
        image.src = ''
        resultContainer.removeAttribute("style")
        result.innerHTML = ''
        resultVal.innerHTML = ''
    }
    else if (seletedPlanet === '--select planet--') {
        error.style.margin = '10rem 7rem'
        error.style.backgroundColor = 'rgba(103, 93, 103, 0.43)'
        error.style.padding = '1rem 1rem 1rem 1rem'
        error.style.width = '40%'
        error.style.textAlign = 'center'
        error.style.fontSize = '25px'
        error.textContent = 'You did not choose a planet yet'
        error.style.color = 'white'
        image.src = ''
        resultContainer.removeAttribute("style")
        result.innerHTML = ''
        resultVal.innerHTML = ''


    }
    else if (seletedPlanet === 'mercury') {
        error.innerHTML = ''
        error.removeAttribute("style")
        resultContainer.style.margin = '10rem 2.5rem'
        resultContainer.style.backgroundColor = 'rgba(103, 93, 103, 0.43)'
        resultContainer.style.fontFamily = 'sans-serif'
        resultVal.style.color = 'white'
        resultVal.style.textAlign = 'center'
        resultVal.style.fontWeight = 'bold'
        resultVal.style.marginTop = '0.8rem'
        result.style.color = 'white'
        resultContainer.style.margin = '3rem auto'
        resultContainer.style.width = '30%'
        resultContainer.style.textAlign = 'center'
        result.style.paddingTop = '5rem'
        result.textContent = `The weight of the object on ${seletedPlanet}`
        resultVal.textContent = `${parseInt(enteredValue * 3.7).toFixed(2)} N`
        image.src = './images/mercury.png'
    }
    else if (seletedPlanet === 'venus') {
        error.innerHTML = ''
        error.removeAttribute("style")
        resultContainer.style.margin = '10rem 2.5rem'
        resultContainer.style.backgroundColor = 'rgba(103, 93, 103, 0.43)'
        resultContainer.style.fontFamily = 'sans-serif'
        resultVal.style.color = 'white'
        resultVal.style.textAlign = 'center'
        resultVal.style.fontWeight = 'bold'
        resultVal.style.marginTop = '0.8rem'
        result.style.color = 'white'
        resultContainer.style.margin = '3rem auto'
        resultContainer.style.width = '30%'
        resultContainer.style.textAlign = 'center'
        result.style.paddingTop = '5rem'
        result.textContent = `The weight of the object on ${seletedPlanet}`
        resultVal.textContent = `${parseInt(enteredValue * 8.9).toFixed(2)} N`
        image.src = './images/venus.png'
    }
    else if (seletedPlanet === 'earth') {
        error.innerHTML = ''
        error.removeAttribute("style")
        resultContainer.style.margin = '10rem 2.5rem'
        resultContainer.style.backgroundColor = 'rgba(103, 93, 103, 0.43)'
        resultContainer.style.fontFamily = 'sans-serif'
        resultVal.style.color = 'white'
        resultVal.style.textAlign = 'center'
        resultVal.style.fontWeight = 'bold'
        resultVal.style.marginTop = '0.8rem'
        result.style.color = 'white'
        resultContainer.style.margin = '3rem auto'
        resultContainer.style.width = '30%'
        resultContainer.style.textAlign = 'center'
        result.style.paddingTop = '5rem'
        result.textContent = `The weight of the object on ${seletedPlanet}`
        resultVal.textContent = `${parseInt(enteredValue * 9.8).toFixed(2)} N`
        image.src = './images/earth.png'
    }
    else if (seletedPlanet === 'mars') {
        error.innerHTML = ''
        error.removeAttribute("style")
        resultContainer.style.margin = '10rem 2.5rem'
        resultContainer.style.backgroundColor = 'rgba(103, 93, 103, 0.43)'
        resultContainer.style.fontFamily = 'sans-serif'
        resultVal.style.color = 'white'
        resultVal.style.textAlign = 'center'
        resultVal.style.fontWeight = 'bold'
        resultVal.style.marginTop = '0.8rem'
        result.style.color = 'white'
        resultContainer.style.margin = '3rem auto'
        resultContainer.style.width = '30%'
        resultContainer.style.textAlign = 'center'
        result.style.paddingTop = '5rem'
        result.textContent = `The weight of the object on ${seletedPlanet}`
        resultVal.textContent = `${parseInt(enteredValue * 3.7).toFixed(2)} N`
        image.src = './images/mars.png'
    }
    else if (seletedPlanet === 'jupiter') {
        error.innerHTML = ''
        error.removeAttribute("style")
        resultContainer.style.margin = '10rem 2.5rem'
        resultContainer.style.backgroundColor = 'rgba(103, 93, 103, 0.43)'
        resultContainer.style.fontFamily = 'sans-serif'
        resultVal.style.color = 'white'
        resultVal.style.textAlign = 'center'
        resultVal.style.fontWeight = 'bold'
        resultVal.style.marginTop = '0.8rem'
        result.style.color = 'white'
        resultContainer.style.margin = '3rem auto'
        resultContainer.style.width = '30%'
        resultContainer.style.textAlign = 'center'
        result.style.paddingTop = '5rem'
        result.textContent = `The weight of the object on ${seletedPlanet}`
        resultVal.textContent = `${parseInt(enteredValue * 23.1).toFixed(2)} N`
        image.src = './images/jupiter.png'
    }
    else if (seletedPlanet === 'saturn') {
        error.innerHTML = ''
        error.removeAttribute("style")
        resultContainer.style.margin = '10rem 2.5rem'
        resultContainer.style.backgroundColor = 'rgba(103, 93, 103, 0.43)'
        resultContainer.style.fontFamily = 'sans-serif'
        resultVal.style.color = 'white'
        resultVal.style.textAlign = 'center'
        resultVal.style.fontWeight = 'bold'
        resultVal.style.marginTop = '0.8rem'
        result.style.color = 'white'
        resultContainer.style.margin = '3rem auto'
        resultContainer.style.width = '30%'
        resultContainer.style.textAlign = 'center'
        result.style.paddingTop = '5rem'
        result.textContent = `The weight of the object on ${seletedPlanet}`
        resultVal.textContent = `${parseInt(enteredValue * 9.0).toFixed(2)} N`
        image.src = './images/saturn.png'
    }
    else if (seletedPlanet === 'uranus') {
        error.innerHTML = ''
        error.removeAttribute("style")
        resultContainer.style.margin = '10rem 2.5rem'
        resultContainer.style.backgroundColor = 'rgba(103, 93, 103, 0.43)'
        resultContainer.style.fontFamily = 'sans-serif'
        resultVal.style.color = 'white'
        resultVal.style.textAlign = 'center'
        resultVal.style.fontWeight = 'bold'
        resultVal.style.marginTop = '0.8rem'
        result.style.color = 'white'
        resultContainer.style.margin = '3rem auto'
        resultContainer.style.width = '30%'
        resultContainer.style.textAlign = 'center'
        result.style.paddingTop = '5rem'
        result.textContent = `The weight of the object on ${seletedPlanet}`
        resultVal.textContent = `${parseInt(enteredValue * 8.7).toFixed(2)} N`
        image.src = './images/uranus.png'
    }
    else if (seletedPlanet === 'neptune') {
        error.innerHTML = ''
        error.removeAttribute("style")
        resultContainer.style.margin = '10rem 2.5rem'
        resultContainer.style.backgroundColor = 'rgba(103, 93, 103, 0.43)'
        resultContainer.style.fontFamily = 'sans-serif'
        resultVal.style.color = 'white'
        resultVal.style.textAlign = 'center'
        resultVal.style.fontWeight = 'bold'
        resultVal.style.marginTop = '0.8rem'
        result.style.color = 'white'
        resultContainer.style.margin = '3rem auto'
        resultContainer.style.width = '30%'
        resultContainer.style.textAlign = 'center'
        result.style.paddingTop = '5rem'
        result.textContent = `The weight of the object on ${seletedPlanet}`
        resultVal.textContent = `${parseInt(enteredValue * 11.0).toFixed(2)} N`
        image.src = './images/neptune.png'
    }
    else if (seletedPlanet === 'pluto') {
        error.innerHTML = ''
        error.removeAttribute("style")
        resultContainer.style.margin = '10rem 2.5rem'
        resultContainer.style.backgroundColor = 'rgba(103, 93, 103, 0.43)'
        resultContainer.style.fontFamily = 'sans-serif'
        resultVal.style.color = 'white'
        resultVal.style.textAlign = 'center'
        resultVal.style.fontWeight = 'bold'
        resultVal.style.marginTop = '0.8rem'
        result.style.color = 'white'
        resultContainer.style.margin = '3rem auto'
        resultContainer.style.width = '30%'
        resultContainer.style.textAlign = 'center'
        result.style.paddingTop = '5rem'
        result.textContent = `The weight of the object on ${seletedPlanet}`
        resultVal.textContent = `${parseInt(enteredValue * 0.7).toFixed(2)} N`
        image.src = './images/pluto.png'
    }
    else if (seletedPlanet === 'moon') {
        error.innerHTML = ''
        error.removeAttribute("style")
        resultContainer.style.margin = '10rem 2.5rem'
        resultContainer.style.backgroundColor = 'rgba(103, 93, 103, 0.43)'
        resultContainer.style.fontFamily = 'sans-serif'
        resultVal.style.color = 'white'
        resultVal.style.textAlign = 'center'
        resultVal.style.fontWeight = 'bold'
        resultVal.style.marginTop = '0.8rem'
        result.style.color = 'white'
        resultContainer.style.margin = '3rem auto'
        resultContainer.style.width = '30%'
        resultContainer.style.textAlign = 'center'
        result.style.paddingTop = '5rem'
        result.textContent = `The weight of the object on ${seletedPlanet}`
        resultVal.textContent = `${parseInt(enteredValue * 1.6).toFixed(2)} N`
        image.src = './images/moon.png'
    }

})