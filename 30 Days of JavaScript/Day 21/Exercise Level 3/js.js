const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const ul = document.querySelectorAll('ul')
const body = document.querySelector('body')
const li = document.querySelectorAll('li')
const p = document.querySelector('p')

body.style.textAlign = 'center'
body.style.fontFamily = 'sans-serif'

h1.innerHTML = 'Asabeneh Yetayeh challenges in <span id = "year">2020</span>'
let year = document.querySelector('#year')
let color

const colorChange = () => {
    let random1 = Math.floor(Math.random() * 255)
    let random2 = Math.floor(Math.random() * 255)
    let random3 = Math.floor(Math.random() * 255)
    color = `rgb(${random1},${random2},${random3})`
    year.style.color = color
}
setInterval(colorChange, 1000)

const now = new Date()
const years = now.getFullYear()
const month = now.getMonth()
const date = now.getDate()
const hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()
if(seconds < 10){
    seconds = `0${seconds}`
}
if(minutes < 10){
    minutes = `0${minutes}`
}
let mon = new Array("January", "February", "March", "April", "May", "June", "July",  "August", "September", "October", "November", "December");
let monn = mon[month]
const dates = `${monn} ${date}, ${years} ${hours}:${minutes}:${seconds}`
h2.style.textDecoration = 'underline'
p.textContent = dates
p.style.border = 'solid'
p.style.width = '250px'
p.style.margin = '0 auto'

const backgroundColorChange = () => {
    let random1 = Math.floor(Math.random() * 255)
    let random2 = Math.floor(Math.random() * 255)
    let random3 = Math.floor(Math.random() * 255)
    color = `rgb(${random1},${random2},${random3})`
    p.style.backgroundColor = color
}
setInterval(backgroundColorChange, 1000)

li.forEach((li) => {
    li.style.listStyle = 'none'
    li.style.border = '1px solid white'
    li.style.margin = '0 auto'
    li.style.width = '650px'
    li.style.height = '40px'
    li.style.textAlign = 'justify'
    if (li.textContent.includes('Done')) {
        li.style.backgroundColor = 'green'
    } else if (li.textContent.includes('Ongoing')) {
        li.style.backgroundColor = "yellow"
    } else {
        li.style.backgroundColor = "red"
    }
})

