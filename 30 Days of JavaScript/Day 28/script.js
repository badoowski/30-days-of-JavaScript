const firstName = document.querySelector('#first-name')
        const lastName = document.querySelector('#last-name')
        const country = document.querySelector('#country')
        const score = document.querySelector('#score')
        const buttons = document.querySelector('.button')
        const errorParagraph = document.querySelector('.error')
        const field = document.querySelector('.field')
        // formatting the month

        const addPlayer = () => {
            // creating list for each player to be added
            const player = document.createElement("li")
            player.className = 'player'
            field.appendChild(player)
            // creating the box to contain the name
            const box = document.createElement("div")
            box.className = 'box'
            player.appendChild(box) // adding each box created to the list
            // creating name and time tags
            const name = document.createElement("h5")
            const date = document.createElement("p")
            box.appendChild(name) // adding the name and date into the box
            // adding the value of both first name and last name
            name.textContent = `${firstName.value.toUpperCase()}    ${lastName.value.toUpperCase()}`
            date.className = 'date'
            // adding date
            const now = new Date()
            const years = now.getFullYear()
            const month = now.getMonth()
            const currentDate = now.getDate()
            let hours = now.getHours()
            let minutes = now.getMinutes()
            let seconds = now.getSeconds()
            if (hours < 10) {
                hours = `0${hours}`
            }
            if (seconds < 10) {
                seconds = `0${seconds}`
            }
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            let mon = new Array("JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC");
            let monn = mon[month]
            date.textContent = `${monn} ${currentDate}, ${years} ${hours}:${minutes}`
            box.appendChild(date)

            const countryy = document.createElement("h5")
            countryy.className = 'country'
            countryy.textContent = country.value.toUpperCase()
            player.appendChild(countryy)


            let scores = document.createElement("h5")
            scores.id = 'scores'
            scores.style.border = 'none'
            scores.readOnly = true
            scores.textContent = `${score.value}`
            scores.className = 'scores'
            player.appendChild(scores)

            let editBox = document.createElement('div')
            editBox.className = 'edit'
            player.appendChild(editBox)

            let del = document.createElement('button')
            del.className = 'edit-button'
            del.textContent = 'DEL'
            del.addEventListener('click', (e) => {
                player.parentNode.removeChild(player)
            })
            editBox.appendChild(del)



            let addFive = document.createElement('button')
            addFive.className = 'edit-button'
            addFive.textContent = '+5'
            editBox.appendChild(addFive)
            addFive.onclick = () => {
                scores.textContent = parseInt(scores.textContent) + 5
            }

            let minusFive = document.createElement('button')
            minusFive.className = 'edit-button'
            minusFive.textContent = '-5'
            editBox.appendChild(minusFive)
            minusFive.onclick = () => {
                scores.textContent = parseInt(scores.textContent) - 5
            }

        }

        const cantBeEmpty = () => {
            if (firstName.value === '' || lastName.value === '' || country.value === '' || score.value === '') {
                errorParagraph.innerHTML = 'All field are required'
            } else {
                errorParagraph.innerHTML = ''
                addPlayer()
            }
        }
        buttons.addEventListener("click", cantBeEmpty)