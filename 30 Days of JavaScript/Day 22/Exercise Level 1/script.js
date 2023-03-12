let body = document.querySelector("body")
        body.style.fontFamily = "sans-serif"

        let h1 = document.createElement("h1")
        h1.textContent = 'Number Generator'
        h1.style.textAlign = 'center'
        document.body.appendChild(h1)

        let h3 = document.createElement("h3")
        h3.textContent = '30DaysOfJavaScript Dom Day2'
        h3.style.textAlign = 'center'
        h3.style.textDecoration = 'underline'
        document.body.appendChild(h3)

        let p = document.createElement("p")
        p.textContent = 'Author: Habib Salau'
        p.style.textAlign = 'center'
        p.style.textDecoration = 'underline'
        document.body.appendChild(p)

        let div = document.createElement('div')
        div.className = 'div'
        div.style.textAlign = "center"
        div.style.marginLeft = '25%'
        div.style.display = 'inline-grid'
        document.body.appendChild(div)                  

        for (let i = 0; i < 101; i++) {
            let flag = 0
            let box = document.createElement("div")
            box.className = 'box'
            box.style.border = '2px solid white'
            box.style.fontSize = '24px'
            box.style.padding = '2rem'
            box.style.color = 'white'
            box.textContent = i
            if(i % 2 == 0) {
                box.style.backgroundColor = 'green'
            } else if(i % 2 == 1){
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