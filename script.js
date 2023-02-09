let nameMessage = document.querySelector('#name-validation')
let emailMessage = document.querySelector('#email-validation')
let passwordMessage = document.querySelector('#password-validation')

let nameInput = document.querySelector('#name')
let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password')

function nameValidation() {
    if (nameInput.value.length <= 4) {
        nameMessage.style.color = 'red'
        nameMessage.innerHTML = 'Must Contain 4 Character (Min)'
        nameMessage.style.display = 'block'
    } else {
        nameMessage.style.color = 'green'
        nameMessage.innerHTML = 'Correct Username Value'
        nameMessage.style.display = 'block'
    }
}

function emailValidation() {
    if (emailInput.value.length <= 12) {
        emailMessage.style.color = 'red'
        emailMessage.innerHTML = 'Must Contain 12 Character (Min)'
        emailMessage.style.display = 'block'
    } else {
        emailMessage.style.color = 'green'
        emailMessage.innerHTML = 'Correct Username Value'
        emailMessage.style.display = 'block'
    }
}

function passwordValidation() {
    if (passwordInput.value.length <= 8) {
        passwordMessage.style.color = 'red'
        passwordMessage.innerHTML = 'Must Contain 8 Character (Min)'
        passwordMessage.style.display = 'block'
    } else {
        passwordMessage.style.color = 'green'
        passwordMessage.innerHTML = 'Correct Username Value'
        passwordMessage.style.display = 'block'
    }
}