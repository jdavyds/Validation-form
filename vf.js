const mail = document.querySelector('#mail')
const country = document.querySelector('#country')
const zip = document.querySelector('#zip')
const password = document.querySelector('#password')
const confPassword = document.querySelector('#confirm-password')
const form = document.querySelector('form')

const mailError = document.querySelector('.mail-error')
const countryError = document.querySelector('.country-error')
const zipError = document.querySelector('.zip-error')
const passwordError = document.querySelector('.password-error')
const confPasswordError = document.querySelector('.cp-error')

mail.addEventListener('input', () => {
    if(mail.validity.valid) {
        mailError.textContent = ''
        mailError.className = 'mail-error'
    } else {
        showError()
    }
})
country.addEventListener('input', () => {
    if(country.validity.valid) {
        countryError.textContent = ''
        countryError.className = 'country-error'
    } else {
        showError()
    }
})
zip.addEventListener('input', () => {
    if(zip.validity.valid) {
        zipError.textContent = ''
        zipError.className = 'zip-error'
    } else {
        showError()
    }
})
password.addEventListener('input', () => {
    if(password.validity.valid) {
        passwordError.textContent = ''
        passwordError.className = 'password-error'
    } else {
        showError()
    }
})
confPassword.addEventListener('input', () => {
    if(confPassword.validity.valid) {
        confPasswordError.textContent = ''
        confPasswordError.className = 'cp-error'
    } else {
        showError()
    }
})

function showError() {
    if(mail.validity.valueMissing) {
        mailError.textContent = 'You need to put a email address' 
        mailError.className = 'mail-error active'
    } else if(mail.validity.typeMismatch) {
        mailError.textContent = 'Invalid mail format'
        mailError.className = 'mail-error active'
    } 
    if(country.validity.valueMissing) {
        countryError.textContent = 'Please input country'
        countryError.className = 'country-error active'
    } else if(country.validity.typeMismatch) {
        countryError.textContent = 'Invalid country name'
        countryError.className = 'country-error active'
    } else if(country.validity.tooShort) {
        countryError.textContent = `Country name too short, minimum of ${country.minLength} characters`
        countryError.className = 'country-error active'
    }
    if(zip.validity.valueMissing) {
        zipError.textContent = 'Please input zip-code'
        zipError.className = 'zip-error active'
    } else if(zip.validity.typeMismatch) {
        zipError.textContent = 'Invalid zip-code'
        zipError.className = 'zip-error active'
    } else if(zip.validity.rangeUnderflow) {
        zipError.textContent = `Zip-code too short, minimum of ${zip.min} characters`
        zipError.className = 'zip-error active'
    }
    if(password.validity.valueMissing) {
        passwordError.textContent = 'Please input password'
        passwordError.className = 'password-error active'
    } else if(password.validity.typeMismatch) {
        passwordError.textContent = 'Invalid password format'
        passwordError.className = 'password-error active'
    } else if(password.validity.tooShort) {
        passwordError.textContent = `Password too weak, minimum of ${password.minLength}`
        passwordError.className = 'password-error active'
    }
    if(confPassword.value !== password.value) {
        confPasswordError.textContent = 'Password do not match'
        confPasswordError.className = 'cp-error  active'
    }
}
form.addEventListener('submit', (e) => {
    if(!mail.validity.valid) {
        showError()
        e.preventDefault()
    }
    if(!country.validity.valid) {
        showError()
        e.preventDefault()
    }
    if(!zip.validity.valid) {
        showError()
        e.preventDefault()
    }
    if(!password.validity.valid) {
        showError()
        e.preventDefault()
    }
    if(!confPassword.validity.valid) {
        showError()
        e.preventDefault()
    } else {
        alert('High five')
    }
})