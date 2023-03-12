const body = document.querySelector('body')
        const p = document.querySelector('#total-countries')
        const div = document.querySelector('.body-div')
        const input = document.querySelector('input')
        const bodyContainer = document.querySelector('.body-container')
        const statement = document.querySelector('#statement')
        const btnOne = document.querySelector('#stating-word')
        const btnTwo = document.querySelector('#anyword')
        const btnThree = document.querySelector('#a-z')
        const btn = document.querySelectorAll('.button-class')



        // styling
        p.textContent = `Total Number of countries: 193`

        // functions
        const country = countries.map((country) => country.toUpperCase())
        const countryy = countries.map((country) => country.toLowerCase())
        const reverseCountry = countries.reverse().map((country) => country.toUpperCase())

        const allCountries = () => {
            div.innerHTML = ''
            for (let i = 0; i < countries.length; i++) {
                let box = document.createElement("div")
                box.className = 'box'
                box.style.height = '22px'
                box.style.border = '1px solid #dbd9e1'
                box.style.fontSize = '15px'
                box.style.padding = '2rem 0.2rem'
                box.style.color = 'white'
                box.style.width = '8rem'

                box.style.textAlign = 'center'
                box.style.fontWeight = "bold"
                box.style.margin = '0.2rem'
                box.textContent = country[i]
                div.appendChild(box)
            }
        }
        allCountries()

        const includeWord = () => {
            div.innerHTML = ''
            let includeWord = input.value
            let count = 0
            for (let i = 0; i < countries.length; i++) {
                let box = document.createElement("div")
                box.className = 'box'
                box.style.height = '22px'
                box.style.border = '1px solid #dbd9e1'
                box.style.fontSize = '15px'
                box.style.padding = '2rem 0.2rem'
                box.style.color = 'white'
                box.style.width = '8rem'

                box.style.textAlign = 'center'
                box.style.fontWeight = "bold"
                box.style.margin = '0.2rem'
                if (countryy[i].includes(includeWord.toLowerCase())) {
                    box.textContent = country[i]
                    count++
                    div.appendChild(box)
                }
                statement.textContent = `Countries containing ${includeWord} are ${count}`
            }

        }
        const startWord = () => {
            div.innerHTML = ''
            let startWord = input.value
            let count = 0
            for (let i = 0; i < countries.length; i++) {
                let box = document.createElement("div")
                box.className = 'box'
                box.style.height = '22px'
                box.style.border = '1px solid #dbd9e1'
                box.style.fontSize = '15px'
                box.style.padding = '2rem 0.2rem'
                box.style.color = 'white'
                box.style.width = '8rem'

                box.style.textAlign = 'center'
                box.style.fontWeight = "bold"
                box.style.margin = '0.2rem'
                if (countryy[i].startsWith(startWord.toLowerCase())) {
                    box.textContent = country[i]
                    count++
                    div.appendChild(box)
                }
                statement.textContent = `Countries that starts with ${startWord} are ${count}`
            }
        }


        const ascendingOrder = () => {
            div.innerHTML = ''
            for (let i = 0; i < countries.length; i++) {
                let box = document.createElement("div")
                box.className = 'box'
                box.style.height = '22px'
                box.style.border = '1px solid #dbd9e1'
                box.style.fontSize = '15px'
                box.style.padding = '2rem 0.2rem'
                box.style.color = 'white'
                box.style.width = '8rem'

                box.style.textAlign = 'center'
                box.style.fontWeight = "bold"
                box.style.margin = '0.2rem'
                box.textContent = country[i]
                div.appendChild(box)
            }
        }
        const decendingSort = () => {
            div.innerHTML = ''
            for (let i = 0; i < reverseCountry.length; i++) {
                let box = document.createElement("div")
                box.className = 'box'
                box.style.height = '22px'
                box.style.border = '1px solid #dbd9e1'
                box.style.fontSize = '15px'
                box.style.padding = '2rem 0.2rem'
                box.style.color = 'white'
                box.style.width = '8rem'
                box.style.textAlign = 'center'
                box.style.fontWeight = "bold"
                box.style.margin = '0.2rem'
                box.textContent = reverseCountry[i]
                div.appendChild(box)
            }
        }

        //adding function to button
        input.addEventListener('input', () => {
            let check = document.getElementById('button-options').value
            if (check === "1") {
                startWord()
            } else if (check === "2") {
                includeWord()
            }
        })
        btnThree.addEventListener('click', decendingSort)
        btnThree.addEventListener('dblclick', ascendingOrder)