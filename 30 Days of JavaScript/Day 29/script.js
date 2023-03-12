const body = document.querySelector('body')
        const section = document.querySelector('section')
        const output = document.querySelector('.output')
        const sectionDiv = document.querySelector('.section-div')

        const text = [
            {
                'para': '30',
            },
            
            {
                'para': 'DAYS'
            },
            {
                'para': 'OF'
            },
            {
                'para': 'JAVASCRIPT'
            },
            {
                'para': 'CHALLENGE'
            },
            {
                'para': 2020
            },
            {
                'para': 'ASABENEH'
            },
            {
                'para': 'YETAYEH'
            }
        ]




        function displayOutput() {
            for (const item of text) {
                let p = document.createElement('p')
                p.className = 'paragraph'
                p.innerHTML = item['para']

                const chameleon = () => {
                    let random1 = Math.floor(Math.random() * 255)
                    let random2 = Math.floor(Math.random() * 255)
                    let random3 = Math.floor(Math.random() * 255)
                    let color = `rgb(${random1},${random2},${random3})`
                    p.style.color = color;
                    p.style.fontFamily = '"Montserrat", sans-serif'
                }
                setInterval(chameleon, 1000)
                output.append(p)
            }

        }
        displayOutput()

        const chameleon_2 = () => {
            let random1 = Math.floor(Math.random() * 255)
            let random2 = Math.floor(Math.random() * 255)
            let random3 = Math.floor(Math.random() * 255)
            let color = `rgb(${random1},${random2},${random3})`
            sectionDiv.style.backgroundColor = color
        }
        setInterval(chameleon_2, 1000)