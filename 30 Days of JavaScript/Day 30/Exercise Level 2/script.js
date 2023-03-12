const firstName = document.querySelector('#firstname')
const lastName = document.querySelector('#lastname')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const telephone = document.querySelector('#telephone')
const bio = document.querySelector('#bio')
const firstError = document.querySelector('#first-error')
const lastError = document.querySelector('#last-error')
const emailError = document.querySelector('#email-error')
const passError = document.querySelector('#pass-error')
const teleError = document.querySelector('#tele-error')
const bioError = document.querySelector('#bio-error')
const button = document.querySelector('#submit')



const validate = () => {
    let regName = /^[a-zA-Z]{3,16}$/
    let regEmail = /^\S+@\S+\.\S+$/
    let regPass = /^([a-z]?\d?@?.?-?_?\w*?,?-?_?){6,20}$/
    let regTele = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    let regBio = /^[a-z]{8,50}$/


    firstNameValue = firstName.value.trim()
    lastNameValue = lastName.value.trim()
    emailValue = email.value.trim()
    passValue = password.value.trim()
    teleValue = telephone.value.trim()
    bioValue = bio.value.trim()

    if (!regName.test(firstNameValue)) {
        firstError.innerHTML = "First name must be alphanumeric and contain 3-16 characters"
        firstName.focus()
        lastError.innerHTML = ""
        emailError.innerHTML = ""
        passError.innerHTML = ""
        teleError.innerHTML = ""
        bioError.innerHTML = ""
        return false
    } else if (!regName.test(lastNameValue)) {
        lastError.innerHTML = "Last name must be alphanumeric and contain 3-16 characters"
        lastName.focus()
        firstError.innerHTML = ""
        emailError.innerHTML = ""
        passError.innerHTML = ""
        teleError.innerHTML = ""
        bioError.innerHTML = ""
        return false
    } else if (!regEmail.test(emailValue)) {
        emailError.innerHTML = "Email must be a valid address, e.g example@example.com";
        email.focus()
        firstError.innerHTML = ""
        lastError.innerHTML = ""
        passError.innerHTML = ""
        teleError.innerHTML = ""
        bioError.innerHTML = ""
        return false
    } else if (!regPass.test(passValue) || passValue == "") {
        passError.innerHTML = "Password must be alphanumeric (@,_ and - are also allowed) and between 6-20 characters"
        password.focus()
        firstError.innerHTML = ""
        lastError.innerHTML = ""
        emailError.innerHTML = ""
        teleError.innerHTML = ""
        bioError.innerHTML = ""
        return false
    } else if (!teleValue.match(regTele)) {
        teleError.innerHTML = "A valid Telephone number (11 digits and 333-333-3334)"
        telephone.focus()
        firstError.innerHTML = ""
        lastError.innerHTML = ""
        emailError.innerHTML = ""
        passError.innerHTML = ""
        bioError.innerHTML = ""
        return false
    } else if (!regBio.test(bioValue) || bioValue === "") {
        bioError.innerHTML = "Bio must contain only lowercase letters, underscores, hyphens and be 8-50 characters"
        bio.focus()
        firstError.innerHTML = ""
        lastError.innerHTML = ""
        emailError.innerHTML = ""
        passError.innerHTML = ""
        teleError.innerHTML = ""
        return false
    }
    else {
        firstError.innerHTML = ""
        lastError.innerHTML = ""
        emailError.innerHTML = ""
        passError.innerHTML = ""
        teleError.innerHTML = ""
        bioError.innerHTML = ""
        return true
    }
}

button.addEventListener('click', validate)