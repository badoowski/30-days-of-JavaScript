const body = document.querySelector('body')
    const tenMost = document.querySelector('#ten-most')
    const countriesLength = document.querySelector('.countries-length')
    const buttonPopulation = document.querySelector('.btn-population')
    const buttonLanguages = document.querySelector('.btn-languages')
    const buttonName = document.querySelector('.btn-name')
    const buttonCap = document.querySelector('.btn-cap')
    const buttonPop = document.querySelector('.btn-pop')
    const buttonChart = document.querySelector('.btn-chart')
    const inputs = document.querySelector('input')
    const populationBtnDiv = document.querySelector('.bar-div')
    const countryView = document.querySelector('.body-containerr')


    //styling
    countriesLength.textContent = `Currently, we have ${countries.length} countries`



    // functionality

    const mostPopulated = () => {
      countryView.innerHTML = ''
      let options = {
        series: [{
          data: [1377422166, 1295210000, 323947000, 258705000, 206135893, 194125062, 186988000, 161006790, 146599183, 126960000],
        }],
        chart: {
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: true,

        },
        colors: ['#f2a93b'],

        xaxis: {
          categories: ['China', 'India', 'United States of America', 'Indonesia', 'Brazil', 'Pakistan', 'Nigeria', 'Bangladesh', 'Russia', 'Japan'],
        },
      };
      let chart = new ApexCharts(countryView, options);
      chart.render();

      tenMost.textContent = `10 Most populated countries in the world`;
    }
    mostPopulated()
    const mostPopularLanguages = () => {
      countryView.innerHTML = ''
      let options = {
        series: [{
          data: [91, 45, 25, 24, 9, 9, 8, 7, 5, 4],
        }],
        chart: {
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: true,
          position: 'top'
        },
        colors: ['#f2a93b'],

        xaxis: {
          categories: ['English', 'French', 'Arabic', 'Spanish', 'Portuguese', 'Russian', 'Dutch', 'German', 'Chinese', 'Serbian'],
        },
      };
      let chart = new ApexCharts(countryView, options);
      chart.render();

      tenMost.textContent = `10 Most Spoken languages in the world`;
    }
    //Chart functions
    const createChart = () => {
      countryView.innerHTML = ''
      let includeWords = inputs.value
      let series = [];
      let categories = [];
      for (let i = 0; i < countries.length; i++) {
        if (countryName[i].includes(includeWords.toUpperCase()) || countryCapitals[i].includes(includeWords.toLowerCase()) || countryLangs[i].includes(includeWords.toLowerCase())) {
          series.push(countryPopulation[i]);
          categories.push(countryName[i]);
        }
      }
      let options = {
        series: [{
          data: series,
        }],
        chart: {
          type: 'bar',
          height: '350',
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            rangeBarOverlap: true,
          }
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ['#000'],
          },

        },
        colors: ['#f2a93b'],

        xaxis: {
          categories: categories,
        },
      }
      let chart = new ApexCharts(countryView, options);
      chart.render();
    }



    // countries function
    // mapping each country key to a variable
    const countryName = countries.map((country) => country.name.toUpperCase())
    const countryFlag = countries.map((country) => country.flag)
    const countryCapital = countries.map((country) => country.capital)
    const countryLang = countries.map((country) => country.languages)
    const countryPopulation = countries.map((country) => country.population)
    const countryCapitals = []
    countryCapital.forEach((capital) => {
      countryCapitals.push(String(capital).toLowerCase())
    });
    const countryLangs = []
    countryLang.forEach((lang) => {
      countryLangs.push(String(lang).toLowerCase())
    })

    //Mapping reverse array
    const reverseCountry = [...countries].reverse()
    const reverseCountryName = reverseCountry.map((country) => country.name.toUpperCase())
    const reverseCountryFlag = reverseCountry.map((country) => country.flag)
    const reverseCountryCapital = reverseCountry.map((country) => country.capital)
    const reverseCountryLang = reverseCountry.map((country) => country.languages)
    const reverseCountryPopulation = reverseCountry.map((country) => country.population)

    const reverseCountryCapitals = []
    reverseCountryCapital.forEach((capital) => {
      reverseCountryCapitals.push(String(capital).toLowerCase())
    });
    const reverseCountryLangs = []
    reverseCountryLang.forEach((lang) => {
      reverseCountryLangs.push(String(lang).toLowerCase())
    })
    //
    // Sorting by capital
    const sortedCountryCapital = countries.sort((a, b) => {
      if (a.capital < b.capital) return -1
      if (a.capital > b.capital) return 1
      return 0
    })
    const sortName = sortedCountryCapital.map((country) => country.name.toUpperCase())
    const sortFlag = sortedCountryCapital.map((country) => country.flag)
    const sortCapital = sortedCountryCapital.map((country) => country.capital)
    const sortPopulation = sortedCountryCapital.map((country) => country.population)
    const sortLang = sortedCountryCapital.map((country) => country.languages)
    const sortCapitals = []
    sortCapital.forEach((capital) => {
      sortCapitals.push(String(capital).toLowerCase())
    });
    const sortLangs = []
    sortLang.forEach((lang) => {
      sortLangs.push(String(lang).toLowerCase())
    })
    //Mapping reverse capital
    const reverseSortedCountryCapital = [...countries].sort((a, b) => {
      if (b.capital < a.capital) return -1
      if (b.capital > a.capital) return 1
      return 0
    })
    const reverseSortName = reverseSortedCountryCapital.map((country) => country.name.toUpperCase())
    const reverseSortFlag = reverseSortedCountryCapital.map((country) => country.flag)
    const reverseSortCapital = reverseSortedCountryCapital.map((country) => country.capital)
    const reverseSortPopulation = reverseSortedCountryCapital.map((country) => country.population)
    const reverseSortLang = reverseSortedCountryCapital.map((country) => country.languages)
    const reverseSortCapitals = []
    reverseSortCapital.forEach((capital) => {
      reverseSortCapitals.push(String(capital).toLowerCase())
    });
    const reverseSortLangs = []
    reverseSortLang.forEach((lang) => {
      reverseSortLangs.push(String(lang).toLowerCase())
    })
    //
    //Sorting by population
    const sortedCountryPopulation = countries.sort((a, b) => {
      if (a.population < b.population) return -1
      if (a.population > b.population) return 1
      return 0
    })
    const sortPopName = sortedCountryPopulation.map((country) => country.name.toUpperCase())
    const sortPopFlag = sortedCountryPopulation.map((country) => country.flag)
    const sortPopCapital = sortedCountryPopulation.map((country) => country.capital)
    const sortPopPopulation = sortedCountryPopulation.map((country) => country.population)
    const sortPopLang = sortedCountryPopulation.map((country) => country.languages)
    const sortPopCapitals = []
    sortPopCapital.forEach((capital) => {
      sortPopCapitals.push(String(capital).toLowerCase())
    });
    const sortPopLangs = []
    sortPopLang.forEach((lang) => {
      sortPopLangs.push(String(lang).toLowerCase())
    })

    // reverse Sorting by population
    const reverseSortedCountryPopulation = [...countries].sort((a, b) => {
      if (b.population < a.population) return -1
      if (b.population > a.population) return 1
      return 0
    })
    const reverseSortPopName = reverseSortedCountryPopulation.map((country) => country.name.toUpperCase())
    const reverseSortPopFlag = reverseSortedCountryPopulation.map((country) => country.flag)
    const reverseSortPopCapital = reverseSortedCountryPopulation.map((country) => country.capital)
    const reverseSortPopPopulation = reverseSortedCountryPopulation.map((country) => country.population)
    const reverseSortPopLang = reverseSortedCountryPopulation.map((country) => country.languages)
    const reverseSortPopCapitals = []
    reverseSortPopCapital.forEach((capital) => {
      reverseSortPopCapitals.push(String(capital).toLowerCase())
    });
    const reverseSortPopLangs = []
    reverseSortPopLang.forEach((lang) => {
      reverseSortPopLangs.push(String(lang).toLowerCase())
    })

    // Functions
    // All countries functions
    const allCountries = () => {
      populationBtnDiv.innerHTML = ''
      for (let i = 0; i < countries.length; i++) {
        let box = document.createElement("div")
        box.className = 'box'
        box.style.height = 'auto'
        box.style.border = '1px solid #dbd9e1'
        box.style.fontSize = '15px'
        box.style.padding = '2rem 0.2rem'
        box.style.color = '#f2a93b'
        box.style.width = '9rem'

        box.style.textAlign = 'left'
        box.style.fontWeight = "bold"
        box.style.margin = '0.2rem'
        box.innerHTML = `<div><img class="flag-img" src="${countryFlag[i]}"/></div><div class="boxContainer"><div class="country-name">${countryName[i]}</div><br /><div><span class="box-paragraph">Capital: ${countryCapital[i]}</span><br /><span class="box-paragraph">Language: ${countryLang[i]}</span><br /><span class="box-paragraph">Population: ${countryPopulation[i]}</span></div></div>`
        populationBtnDiv.appendChild(box)
      }
    }
    allCountries()
    // IncludeWord function
    const includeWord = () => {
      populationBtnDiv.innerHTML = ''
      let includeWords = inputs.value
      for (let i = 0; i < countries.length; i++) {
        let box = document.createElement("div")
        box.className = 'box'
        box.style.height = 'auto'
        box.style.border = '1px solid #dbd9e1'
        box.style.fontSize = '15px'
        box.style.padding = '2rem 0.2rem'
        box.style.color = '#f2a93b'
        box.style.width = '9rem'
        box.style.textAlign = 'left'
        box.style.fontWeight = "bold"
        box.style.margin = '0.2rem'
        if (countryName[i].includes(includeWords.toUpperCase()) || countryCapitals[i].includes(includeWords.toLowerCase()) || countryLangs[i].includes(includeWords.toLowerCase())) {
          box.innerHTML = `<div><img class="flag-img" src="${countryFlag[i]}"/></div><div class="boxContainer"><div class="country-name">${countryName[i]}</div><br />
                    <div><span class="box-paragraph">Capital: ${countryCapital[i]}</span><br />
                    <span class="box-paragraph">Language: ${countryLang[i]}</span><br />
                    <span class="box-paragraph">Population: ${countryPopulation[i]}</span>
                    </div></div>`
          populationBtnDiv.appendChild(box)
        }
      }
    }
    //  sorting by name in ascending order
    const sortByname = () => {
      populationBtnDiv.innerHTML = ''
      let includeWords = inputs.value
      for (let i = 0; i < countries.length; i++) {
        let box = document.createElement("div")
        box.className = 'box'
        box.style.height = 'auto'
        box.style.border = '1px solid #dbd9e1'
        box.style.fontSize = '15px'
        box.style.padding = '2rem 0.2rem'
        box.style.color = '#f2a93b'
        box.style.width = '9rem'
        box.style.textAlign = 'left'
        box.style.fontWeight = "bold"
        box.style.margin = '0.2rem'
        if (countryName[i].includes(includeWords.toUpperCase()) || countryCapitals[i].includes(includeWords.toLowerCase()) || countryLangs[i].includes(includeWords.toLowerCase())) {
          box.innerHTML = `<div><img class="flag-img" src="${countryFlag[i]}"/></div><div class="boxContainer">
                      <div class="country-name">${countryName[i]}</div><br />
                    <div><span class="box-paragraph">Capital: ${countryCapital[i]}</span><br />
                    <span class="box-paragraph">Language: ${countryLang[i]}</span><br />
                    <span class="box-paragraph">Population: ${countryPopulation[i]}</span>
                    </div></div>`
          populationBtnDiv.appendChild(box)
        }
      }
    }
    //  Sorting by name descending order
    const reverseSortByname = () => {
      populationBtnDiv.innerHTML = ''
      let includeWords = inputs.value
      for (let i = 0; i < reverseCountry.length; i++) {
        let box = document.createElement("div")
        box.className = 'box'
        box.style.height = 'auto'
        box.style.border = '1px solid #dbd9e1'
        box.style.fontSize = '15px'
        box.style.padding = '2rem 0.2rem'
        box.style.color = '#f2a93b'
        box.style.width = '9rem'
        box.style.textAlign = 'left'
        box.style.fontWeight = "bold"
        box.style.margin = '0.2rem'
        if (reverseCountryName[i].includes(includeWords.toUpperCase()) || reverseCountryCapitals[i].includes(includeWords.toLowerCase()) || reverseCountryLangs[i].includes(includeWords.toLowerCase())) {
          box.innerHTML = `<div><img class="flag-img" src="${reverseCountryFlag[i]}"/></div><div class="boxContainer">
                      <div class="country-name">${reverseCountryName[i]}</div><br />
                    <div><span class="box-paragraph">Capital: ${reverseCountryCapital[i]}</span><br />
                    <span class="box-paragraph">Language: ${reverseCountryLang[i]}</span><br />
                    <span class="box-paragraph">Population: ${reverseCountryPopulation[i]}</span>
                    </div></div>`
          populationBtnDiv.appendChild(box)
        }
      }
    }
    // sorting by capital
    const sortByCapital = () => {
      populationBtnDiv.innerHTML = ''
      let includeWords = inputs.value
      for (let i = 0; i < sortedCountryCapital.length; i++) {
        let box = document.createElement("div")
        box.className = 'box'
        box.style.height = 'auto'
        box.style.border = '1px solid #dbd9e1'
        box.style.fontSize = '15px'
        box.style.padding = '2rem 0.2rem'
        box.style.color = '#f2a93b'
        box.style.width = '9rem'
        box.style.textAlign = 'left'
        box.style.fontWeight = "bold"
        box.style.margin = '0.2rem'
        if (sortName[i].includes(includeWords.toUpperCase()) || sortCapitals[i].includes(includeWords.toLowerCase()) || sortLangs[i].includes(includeWords.toLowerCase())) {
          box.innerHTML = `<div><img class="flag-img" src="${sortFlag[i]}"/></div><div class="boxContainer">
                      <div class="country-name">${sortName[i]}</div><br />
                    <div><span class="box-paragraph">Capital: ${sortCapital[i]}</span><br />
                    <span class="box-paragraph">Language: ${sortLang[i]}</span><br />
                    <span class="box-paragraph">Population: ${sortPopulation[i]}</span>
                    </div></div>`
          populationBtnDiv.appendChild(box)
        }
      }
    }
    // reverse sorting by capital
    const reverseSortByCapital = () => {
      populationBtnDiv.innerHTML = ''
      let includeWords = inputs.value
      for (let i = 0; i < reverseSortedCountryCapital.length; i++) {
        let box = document.createElement("div")
        box.className = 'box'
        box.style.height = 'auto'
        box.style.border = '1px solid #dbd9e1'
        box.style.fontSize = '15px'
        box.style.padding = '2rem 0.2rem'
        box.style.color = '#f2a93b'
        box.style.width = '9rem'
        box.style.textAlign = 'left'
        box.style.fontWeight = "bold"
        box.style.margin = '0.2rem'
        if (reverseSortName[i].includes(includeWords.toUpperCase()) || reverseSortCapitals[i].includes(includeWords.toLowerCase()) || reverseSortLangs[i].includes(includeWords.toLowerCase())) {
          box.innerHTML = `<div><img class="flag-img" src="${reverseSortFlag[i]}"/></div><div class="boxContainer">
                      <div class="country-name">${reverseSortName[i]}</div><br />
                    <div><span class="box-paragraph">Capital: ${reverseSortCapital[i]}</span><br />
                    <span class="box-paragraph">Language: ${reverseSortLang[i]}</span><br />
                    <span class="box-paragraph">Population: ${reverseSortPopulation[i]}</span>
                    </div></div>`
          populationBtnDiv.appendChild(box)
        }
      }
    }
    // sort by population
    const sortByPopulation = () => {
      populationBtnDiv.innerHTML = ''
      let includeWords = inputs.value
      for (let i = 0; i < sortedCountryPopulation.length; i++) {
        let box = document.createElement("div")
        box.className = 'box'
        box.style.height = 'auto'
        box.style.border = '1px solid #dbd9e1'
        box.style.fontSize = '15px'
        box.style.padding = '2rem 0.2rem'
        box.style.color = '#f2a93b'
        box.style.width = '9rem'
        box.style.textAlign = 'left'
        box.style.fontWeight = "bold"
        box.style.margin = '0.2rem'
        if (sortPopName[i].includes(includeWords.toUpperCase()) || sortPopCapitals[i].includes(includeWords.toLowerCase()) || sortPopLangs[i].includes(includeWords.toLowerCase())) {
          box.innerHTML = `<div><img class="flag-img" src="${sortPopFlag[i]}"/></div><div class="boxContainer">
                      <div class="country-name">${sortPopName[i]}</div><br />
                    <div><span class="box-paragraph">Capital: ${sortPopCapital[i]}</span><br />
                    <span class="box-paragraph">Language: ${sortPopLang[i]}</span><br />
                    <span class="box-paragraph">Population: ${sortPopPopulation[i]}</span>
                    </div></div>`
          populationBtnDiv.appendChild(box)
        }
      }
    }
    // reverse sort by population
    const reverseSortByPopulation = () => {
      populationBtnDiv.innerHTML = ''
      let includeWords = inputs.value
      for (let i = 0; i < reverseSortedCountryPopulation.length; i++) {
        let box = document.createElement("div")
        box.className = 'box'
        box.style.height = 'auto'
        box.style.border = '1px solid #dbd9e1'
        box.style.fontSize = '15px'
        box.style.padding = '2rem 0.2rem'
        box.style.color = '#f2a93b'
        box.style.width = '9rem'
        box.style.textAlign = 'left'
        box.style.fontWeight = "bold"
        box.style.margin = '0.2rem'
        if (reverseSortPopName[i].includes(includeWords.toUpperCase()) || reverseSortPopCapitals[i].includes(includeWords.toLowerCase()) || reverseSortPopLangs[i].includes(includeWords.toLowerCase())) {
          box.innerHTML = `<div><img class="flag-img" src="${reverseSortPopFlag[i]}"/></div><div class="boxContainer">
                      <div class="country-name">${reverseSortPopName[i]}</div><br />
                    <div><span class="box-paragraph">Capital: ${reverseSortPopCapital[i]}</span><br />
                    <span class="box-paragraph">Language: ${reverseSortPopLang[i]}</span><br />
                    <span class="box-paragraph">Population: ${reverseSortPopPopulation[i]}</span>
                    </div></div>`
          populationBtnDiv.appendChild(box)
        }
      }
    }
    inputs.addEventListener('input', includeWord)
    buttonName.addEventListener('click', sortByname)
    buttonName.addEventListener('dblclick', reverseSortByname)
    buttonCap.addEventListener('click', sortByCapital)
    buttonCap.addEventListener('dblclick', reverseSortByCapital)
    buttonPop.addEventListener('click', sortByPopulation)
    buttonPop.addEventListener('dblclick', reverseSortByPopulation)
    buttonChart.addEventListener('click', createChart)

