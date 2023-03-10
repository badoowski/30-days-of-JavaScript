let body = document.querySelector("body")
        body.style.fontFamily = "sans-serif"

        let h1 = document.createElement("h1")
        h1.textContent = 'Number Generator'
        h1.style.color = 'green'
        h1.style.textAlign = 'center'
        body.appendChild(h1)

        let h3 = document.createElement("p")
        h3.textContent = '30DaysOfJavaScript Dom Day3'
        h3.style.textAlign = 'center'
        h3.style.fontSize = '22px'
        body.appendChild(h3)

        let p = document.createElement("p")
        p.textContent = 'Author: Habib Salau'
        p.style.textAlign = 'center'
        body.appendChild(p)

        const errorDiv = document.createElement('div')
        body.appendChild(errorDiv)

        const randNumDiv = document.createElement('div')
        randNumDiv.style.textAlign = 'center'
        randNumDiv.style.display = 'flex'
        randNumDiv.style.justifyContent = 'space-evenly'
        randNumDiv.style.paddingBottom = '1rem'
        randNumDiv.style.margin = '1rem 14rem 0 14rem'
        body.appendChild(randNumDiv)

        const errorAlert = document.createElement('p')
        errorAlert.style.textAlign = 'center'
        errorDiv.appendChild(errorAlert)


        const input = document.createElement('input')
        input.type = 'type'
        input.style.border = '1px solid #71c58b'
        input.style.width = '30rem'
        input.style.margin = '0 0.6rem'
        input.style.padding = '0.6rem 0.3rem'
        input.placeholder = 'Generate more numbers'
        randNumDiv.appendChild(input)

        const button = document.createElement('button')
        button.textContent = 'Generate numbers'
        button.style.color = 'white'
        button.style.textAlign = 'center'
        button.style.padding = '0.6rem 0.4rem'
        button.style.marginLeft = '0.2rem'
        button.style.border = 'none'
        button.style.backgroundColor = 'green'
        randNumDiv.appendChild(button)

        let containerDiv = document.createElement('div')
        containerDiv.className = 'containerDiv'
        body.appendChild(containerDiv)

        let div = document.createElement('div')
        div.className = 'div'
        div.style.textAlign = "center"
        div.style.display = 'inline-grid'
        containerDiv.appendChild(div)

        for (let i = 0; i < 51; i++) {
            let flag = 0
            let box = document.createElement("div")
            box.className = 'box'
            box.style.border = '0.2rem solid white'
            box.style.fontSize = '24px'
            box.style.fontWeight = 'bold'
            box.style.padding = '2rem'
            box.style.color = 'white'
            box.textContent = i
            if (i % 2 == 0) {
                box.style.backgroundColor = 'green'
            } else if (i % 2 == 1) {
                box.style.backgroundColor = 'yellow'
            }
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    flag = 1;
                }
            }
            if (i > 1 && flag == 0) {
                box.style.backgroundColor = 'red'
            }
            div.appendChild(box)
        }

        //functionality
        // click event listener

        button.addEventListener('click', () => {
            let randNum = input.value
            if (typeof (Number(randNum)) === "number" && Number(randNum) > 0) {
                div.innerHTML = "";
                input.value = ""
                errorAlert.innerHTML = "";
                for (let i = 0; i < Number(randNum); i++) {
                    let flag = 0
                    let box = document.createElement("div")
                    box.className = 'box'
                    box.style.border = '0.2rem solid white'
                    box.style.fontSize = '24px'
                    box.style.fontWeight = 'bold'
                    box.style.padding = '2rem'
                    box.style.color = 'white'
                    box.textContent = i
                    if (i % 2 == 0) {
                        box.style.backgroundColor = 'green'
                    } else if (i % 2 == 1) {
                        box.style.backgroundColor = 'yellow'
                    }
                    for (let j = 2; j < i; j++) {
                        if (i % j == 0) {
                            flag = 1;
                        }
                    }
                    if (i > 1 && flag == 0) {
                        box.style.backgroundColor = 'red'
                    }
                    div.appendChild(box)
                }

            } else if (Number(randNum) === 0) {
                input.value = ""
                errorAlert.innerHTML = ""
                errorAlert.textContent = "Enter a number greater than 0"
                errorAlert.style.color = "red"
            } else if (typeof (randNum) === "string") {
                input.value = ""
                errorAlert.innerHTML = ""
                errorAlert.textContent = "Value entered must be a number"
                errorAlert.style.color = "red"
            }
            else if (randNum === "") {
                input.value = ""
                errorAlert.innerHTML = ""
                errorAlert.textContent = 'Enter a number';
                errorAlert.style.color = "red"
            }

        })