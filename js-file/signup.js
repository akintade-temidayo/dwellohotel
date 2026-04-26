const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const PhoneNumber = document.getElementById('phoneNumber')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword');
const termsAccepted = document.getElementById('terms');
const submitBtn = document.getElementById('submitBtn');
const signUpForm = document.getElementById('signUpForm');

console.log(firstName, "the first value")


// for form submission

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    // to prevent reloading

    const firstNameVal = firstName.value.trim()
    const lastNameVal = lastName.value.trim()
    const emailVal = email.value.trim()
    const phoneNumberVal = PhoneNumber.value.trim()
    const passwordVal =password.value
    const confirmPasswordVal = confirmPassword.value
    const termsAcceptedVal = termsAccepted.checked
    // because checkbox does not have or  contain value
    
    // name check
    if (firstNameVal.length < 2 || lastNameVal.length < 2){
        return alert("First name and last name must be five character and above")
    }

    // submitBtn.textContent = 'Processing Please wait...'

    // password check
    if (!passwordVal || !confirmPassword ){
        return alert ('please enter password')
    }
    
    // password and confirm password check
    if (passwordVal !== confirmPasswordVal ) {
        return alert('Password does not match')
    }

    // email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailVal)){
        return alert ('Enter a valid email')
    }

    // phone number
    if (phoneNumberVal.length !== 11 ){
        return alert ('Invalid Phone number. Please chevk and try again')
    }

    // valid checkout
    if (!termsAcceptedVal){
        return alert('agree to terms & condition')
    }


    const userInfo = {
        fName: firstNameVal,
        lName: lastNameVal,
        eM: emailVal,
        phone: phoneNumberVal,
        pass: passwordVal,
        cPass: confirmPasswordVal
    }

    const savedItems = JSON.stringify(userInfo)
    localStorage.setItem('userInfo', savedItems)

    return window.location.href = './login.html'

})

