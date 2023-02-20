let mainDiv = document.createElement('div')
mainDiv.id = 'main_div'
mainDiv.style.textAlign = 'center'
document.body.appendChild(mainDiv)

let divItems = document.createElement('p')
divItems.textContent = `${asabenehChallenges2020['description']}`
// mainDiv.appendChild(divItems)

//python
let daysOfPython = document.createElement('div')
daysOfPython.className = 'days_of_python'
daysOfPython.style.display ='flex'
daysOfPython.style.margin ='0 auto'
daysOfPython.style.width ='50%'
daysOfPython.style.padding ='0.4rem 0.8rem'
daysOfPython.style.justifyContent ='space-between'
daysOfPython.style.backgroundColor ='#5bbc7a'
mainDiv.appendChild(daysOfPython)

//python items
let pythonTitle = document.createElement('p')
pythonTitle.className = 'python_title'
pythonTitle.textContent = `${asabenehChallenges2020.challenges[0].name}`
pythonTitle.style.textDecoration = 'underline'
pythonTitle.style.color = '#551a8b'
daysOfPython.appendChild(pythonTitle)

//The <details> tag specifies additional details that the user can open and close on demand.
//The <details> tag is often used to create an interactive widget that the user can open and close. By default, the widget is closed. When open, it expands, and displays the content within.
//Any sort of content can be put inside the <details> tag. 
//Tip: The <summary> tag is used in conjunction with <details> to specify a visible heading for the details.

//python detail
let pythonDetails = document.createElement('details')
pythonDetails.className = 'python_details'
pythonDetails.style.paddingTop = '1rem'
daysOfPython.appendChild(pythonDetails)

//python summary detail
let pythonDetailsSummary = document.createElement('summary')
pythonDetails.className = 'python_summary'
pythonDetailsSummary.textContent = `${asabenehChallenges2020.challenges[0].topics[0]}`
pythonDetails.appendChild(pythonDetailsSummary)


//python summary para
let pythonSummaryArr
for(let i = 0; i < `${asabenehChallenges2020.challenges[0].topics.length}`; i++) {
  pythonSummaryArr = document.createElement('p')
  pythonSummaryArr.textContent = `${asabenehChallenges2020.challenges[0].topics[i]}`
  pythonDetails.appendChild(pythonSummaryArr)
}