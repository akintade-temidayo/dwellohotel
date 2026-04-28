const otpInputs = [
    document.getElementById('otp1'),
    document.getElementById('otp2'),
    document.getElementById('otp3'),
    document.getElementById('otp4'),
    document.getElementById('otp5'),
    document.getElementById('otp6'),
];
const newPassword     = document.getElementById('newPassword');
const confirmPassword = document.getElementById('confirmPassword');
const resetBtn        = document.getElementById('resetBtn');
const resetForm       = document.getElementById('resetForm');

// ---- Check OTP is in storage when page loads ----
console.log('OTP in storage on page load:', localStorage.getItem('resetOTP'));

// ---- OTP Auto-jump between boxes ----
otpInputs.forEach((input, index) => {

    // Numbers only
    input.addEventListener('keydown', (e) => {
        const allowedKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'];
        if (allowedKeys.includes(e.key)) {
            // Backspace on empty box goes back
            if (e.key === 'Backspace' && input.value === '' && index > 0) {
                otpInputs[index - 1].focus();
            }
            return;
        }
        if (!/[0-9]/.test(e.key)) e.preventDefault();
    });

    // Auto jump to next box
    input.addEventListener('input', () => {
        if (input.value.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });
});

// ---- Form Submission ----
resetForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect OTP
    const enteredOTP = otpInputs.map(input => input.value).join('');
    const savedOTP   = localStorage.getItem('resetOTP');

    // Debug logs — check these in your console
    console.log('Entered OTP:', enteredOTP);
    console.log('Saved OTP:',   savedOTP);
    console.log('Match?',       enteredOTP === savedOTP);

    const newPasswordVal     = newPassword.value;
    const confirmPasswordVal = confirmPassword.value;

    // OTP length check
    if (enteredOTP.length !== 6) {
        return alert('Please enter the complete 6-digit OTP');
    }

    // OTP match check —  both converted to string
    if (enteredOTP.toString() !== savedOTP.toString()) {
        return alert('Incorrect OTP. Please check and try again.');
    }

    // Password checks
    if (!newPasswordVal) {
        return alert('Please enter a new password');
    }

    if (newPasswordVal.length < 6) {
        return alert('Password must be at least 6 characters');
    }

    if (newPasswordVal !== confirmPasswordVal) {
        return alert('Passwords do not match');
    }

    // Update password in localStorage
    const savedItems = localStorage.getItem('userInfo');
    const savedUser  = JSON.parse(savedItems);

    if (!savedUser) {
        return alert('No account found. Please sign up first.');
    }

    savedUser.pass  = newPasswordVal;
    savedUser.cPass = newPasswordVal;
    localStorage.setItem('userInfo', JSON.stringify(savedUser));

    // Clean up
    localStorage.removeItem('resetOTP');
    localStorage.removeItem('resetEmail');

    resetBtn.textContent = 'Password Reset! Redirecting...';
    resetBtn.disabled    = true;

    alert('Password reset successfully! Please log in with your new password.');

    //  Fix 1 — relative path
    window.location.href = './login.html';
});