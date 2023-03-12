const body = document.querySelector('body')
    const tenMost = document.querySelector('#ten-most')
    const countriesLength = document.querySelector('.countries-length')
    const buttonPopulation = document.querySelector('.btn-population')
    const buttonLanguages = document.querySelector('.btn-languages')




    countriesLength.textContent = `Currently, we have ${countries.length} countries`

    buttonPopulation.textContent = 'POPULATION'
    buttonLanguages.textContent = 'LANGUAGES'
    //styling

    // functionality

    const populationBtnDiv = document.querySelector('.bar-div')

    const mostPopulated = () => {
      populationBtnDiv.innerHTML = ''
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
        style: {
            colors: ['#000'],
          },
      },
      colors: ['#f2a93b'],

      xaxis: {
        categories: ['China', 'India', 'United States of America', 'Indonesia', 'Brazil', 'Pakistan', 'Nigeria', 'Bangladesh', 'Russia', 'Japan'],
      },
    };
    let chart = new ApexCharts(populationBtnDiv, options);
    chart.render();

    tenMost.textContent = `10 Most populated countries in the world`;
    }
    
    const mostPopularLanguages = () => {
      populationBtnDiv.innerHTML = ''
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
        position: 'top',
        style: {
            colors: ['#000'],
          },
      },
      colors: ['#f2a93b'],

      xaxis: {
        categories: ['English', 'French', 'Arabic', 'Spanish', 'Portuguese', 'Russian', 'Dutch', 'German', 'Chinese', 'Serbian'],
      },
    };
    let chart = new ApexCharts(populationBtnDiv, options);
    chart.render();

    tenMost.textContent = `10 Most Spoken languages in the world`;
    }