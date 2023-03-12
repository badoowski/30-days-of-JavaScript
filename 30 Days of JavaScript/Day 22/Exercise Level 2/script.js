let body = document.querySelector("body")
        body.style.fontFamily = "sans-serif"

        let h1 = document.createElement("h1")
        h1.textContent = 'WORLD COUNTRIES LIST'
        h1.style.textAlign = 'center'
        document.body.appendChild(h1)

        let h2 = document.createElement("h2")
        h2.textContent = 'Total Number of Countries: 193'
        h2.style.textAlign = 'center'
        document.body.appendChild(h2)

        let p = document.createElement("p")
        p.textContent = '30DaysOfJavaScript Dom Day2'
        p.style.textAlign = 'center'
        document.body.appendChild(p)

        let p2 = document.createElement("p")
        p2.textContent = 'Author: Habib Salau'
        p2.style.textAlign = 'center'
        document.body.appendChild(p2)

        let div = document.createElement('div')
        div.className = 'div'
        div.style.textAlign = "center"
        div.style.margin = 'auto'
        div.style.padding = '5rem'
        div.style.display = 'inline-grid'
        document.body.appendChild(div)

        const country = countries.map((country) => country.toUpperCase())
        for (let i = 0; i < countries.length; i++) {
            let box = document.createElement("div")
            box.className = 'box'
            box.style.height = '25px'
            box.style.border = '1px solid #dbd9e1'
            box.style.fontSize = '15px'
            box.style.padding = '2rem 0.5rem'
            box.style.color = 'black'
            box.style.textAlign = 'center'
            box.style.fontWeight = "bold"
            box.style.margin = '0.2rem'
            box.textContent = country[i]
    
                    div.appendChild(box)
        }