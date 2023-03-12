// declarations
let body = document.querySelector("body");
const key = document.createElement('div')
const keyCode = document.createElement('div')
let input = document.querySelector("input")
let containerDiv = document.createElement('div')
containerDiv.className = 'containerDiv'
body.appendChild(containerDiv)
// styling
key.style.padding = '4px'
key.textContent = 'Press any keyboard key'
key.style.fontFamily = 'Helvetica'
key.style.fontSize = 'large'
key.style.margin ='100px auto 100px auto'
key.style.width ='35rem'
key.style.fontWeight = 'bold'
key.style.border = '2px solid grey'
key.style.textAlign = 'center'
containerDiv.appendChild(key)




// Event Listener
body.addEventListener("keydown", function (e) {
    keyCode.style.padding = '4px'
keyCode.style.margin = '100px auto 100px auto'
keyCode.style.fontSize = 'large'
keyCode.style.fontWeight = 'bold'
keyCode.style.width = '100px'
keyCode.style.height = '100px'
keyCode.style.border = '2px solid grey'
keyCode.style.textAlign = 'center'
body.appendChild(keyCode)
keyCode.innerHTML = ""
key.innerHTML = ""
let keyMessage = `<h1>You pressed <span class="green">${e.key}</span></h1>`
key.innerHTML = keyMessage;
let keyCodeMessage = `<h1><span class="green">${e.keyCode}</span></h1>`
keyCode.innerHTML = keyCodeMessage;


});

