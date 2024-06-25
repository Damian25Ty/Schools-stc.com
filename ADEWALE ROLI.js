const code = document.getElementById('code')
const CheckName = document.getElementById('name')
const form = document.getElementById('form')
const btn = document.getElementById('submit')
const errrorElement = document.getElementById('error')
const name = 'ADEWALE ROLI';

form.addEventListener('submit', (e) => {
    let messages = []
    if (CheckName.value === '' || CheckName.value == null){
        messages.push('Name is required')
    }
    if (CheckName.value != name){
        messages.push('This name is not recognised')
    }
    if (code.value === '' || code.value == null) {
        messages.push('Scratch card code is required')
    }
    if (code.value !=913157) {

        messages.push('enter the correct code from the scratch card')
    }
    if (messages.length >0) {
        e.preventDefault()
        errrorElement.innerText = messages.join(', ')
    }
})
