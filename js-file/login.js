const email = document.getElementById('email');
const password = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');

console.log(email, "the email value")

// form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const emailVal = email.value.trim()
    const passwordVal = password.value;

    // email check
    if (emailVal === '') {
        return alert('Please enter your email address');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
        return alert('Please enter a valid email address');
    }

    // password check
    if (!passwordVal){
        return alert ('Please enter Password')
    };


    // check if the user already exist in the local storage
    const savedItems = localStorage.getItem('userInfo');
    const savedUser = JSON.parse(savedItems); 

    if (!savedUser) {
        return alert('No account found. Please sign up first.');
    }

    if (savedUser.eM !== emailVal) {
        return alert('Email address not found. Please check and try again.');
    }

    if (savedUser.pass !== passwordVal) {
        return alert('Incorrect password. Please try again.');
    }

    loginBtn.textContent = 'Logging in... Please wait';
    loginBtn.disabled = true;

    // save the useer info to local storage 
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('loggedInUser', JSON.stringify(savedUser));

    window.location.href = '../index.html';
})