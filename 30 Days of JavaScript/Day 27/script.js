const names = document.querySelector('.asabeneh')
            const activityy = document.querySelector('.activity')
            const acti = document.querySelector('.activities')
            const coursed = document.querySelector('.course')
            const techs = document.querySelector('.techs')
            //styling
            names.textContent = 'Asabeneh Yetayeh'
            techs.innerHTML = `The technologies I teach <span id="teach"></span>`
            let year = document.querySelector("#teach");
            year.className = 'teach'
            const tech = technologies.map((tech) => tech.toUpperCase())

            let count = 0;
            setInterval(e => {
                let randomNumber = Math.floor(Math.random() * 11);
                count = (count + randomNumber) % tech.length;
                let newColour = tech[count];
                year.textContent = `${newColour}`;
            }, 1200);

            setInterval(e => {
                let randomNumber = Math.floor(Math.random() * 11);
                count = (count + randomNumber) % activities.length;
                let newColour = activities[count];
                activityy.textContent = `${newColour}`;
            }, 2000);

            const backgroundColorChange = () => {
                let random1 = Math.floor(Math.random() * 255)
                let random2 = Math.floor(Math.random() * 255)
                let random3 = Math.floor(Math.random() * 255)
                color = `rgb(${random1},${random2},${random3})`
                year.style.color = color
            }
            setInterval(backgroundColorChange, 2000)

            courses.map((courses) => {
                let lang = document.createElement("p");
                lang.id = 'course-item'
                lang.style.textTransform = 'uppercase'
                lang.style.padding = '2.8rem 0.9rem'
                lang.style.border = '0.1px solid rgb(240, 235, 235)'
                lang.style.borderRadius = '5px'
                lang.textContent = `${courses}`
                coursed.append(lang)
            })