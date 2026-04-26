const email         = document.getElementById('email');
const submitBtn     = document.getElementById('submitBtn');
const fPasswordForm = document.getElementById('fPasswordForm');

fPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const emailVal = email.value.trim(); 

    if (emailVal === '') {
        return alert('Please enter your email address');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
        return alert('Enter a valid email');
    }

    const savedItems = localStorage.getItem('userInfo');
    const savedUser  = JSON.parse(savedItems);

    if (!savedUser) {
        return alert('No account found. Please sign up first.');
    }

    if (savedUser.eM !== emailVal) {
        return alert('Email address not found. Please check and try again.');
    }

    submitBtn.textContent = 'Processing, Please wait...';
    submitBtn.disabled = true;

    localStorage.setItem('resetEmail', emailVal); // save for reset page

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('resetOTP', otp);
    console.log('OTP generated:', otp)
    console.log('OTP saved:', localStorage.getItem('resetOTP')); 
    alert(`A password reset link has been sent to ${emailVal}. Please check your inbox.`);

    window.location.href = './resetpassword.html';
});