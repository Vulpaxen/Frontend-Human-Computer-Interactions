//Agree to newsletter
button = document.getElementById('agree');
agree.addEventListener('click', function(){
    agree.style.background = "green";
})

//Email,Phone,Preference Validation
let names = document.getElementById('name')
let email = document.getElementById('email')
let pref = document.getElementById('pref')
let phone = document.getElementById('phone')
let date = document.getElementById('date')
let age = document.getElementById('age')
let form = document.getElementById('form')
let errorElement = document.getElementById('error')

function checkEmpty(value){
    if(value === '' || value.length < 5){
        return true
    }else{
        return false
    }
}


//KALO SALAH EMAILNYA RETURN TRUE!
function validateEmail(email){
    let value = email.value.trim()
    if(checkEmpty(value)){
        return true
    }

    let a = 0
    while(a< value.length){
        if(value[a] == '@'){
            return false
        }
        a++
    }
    return true
}

function validateName(name){
    let value = name.value.trim()
    if(checkEmpty(value)){
        return true
    }
    return false
}

function validateDate(date){
    let value = date.value.trim()
    if(checkEmpty(value)){
        return true
    }
    return false
}

//KALO PHONE SALAH RETURN TRUE
function validatePhone(phone){
    let value = phone.value.trim()
    if(checkEmpty(value)){
        return true
    }

    let a = 0
    while(a< value.length){
        if(value[a] === '0' || value[a] === '1' || value[a] === '2' || value[a] === '3' || value[a] === '4' || value[a] === '5' || value[a] === '6' || value[a] === '7' || value[a] === '8' || value[a] === '9'){
            a++
        }else{
            return true
        }
    }
    return false
}

form.addEventListener('submit', (e) => {
    let messages = []
    messages.innerText = ''
    if(validateName(names)){
        messages.push('Wrong name format, please try again')
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    else if( validateEmail(email) ){
        messages.push('Wrong email format, please try again')
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    else if( validatePhone(phone) ){
        messages.push('Phone number is not a number, please try again')
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    else if( validateDate(date) ){
        messages.push('Input date, please try again')
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    else if(!(document.getElementById('Skin').checked || document.getElementById('Body').checked)){
        messages.push('Please pick preferences')
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    else if(agree.style.background !== "green"){
        messages.push('Please click agree to receive newsletter')
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    else{
        // messages.push('Congratulation you have subscribe!')
        alert('Thank you for filling out the form!')
        e.preventDefault()
        messages = []
        errorElement.innerText = messages.join(', ')
    }
})