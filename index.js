const isLoggedIn   = localStorage.getItem('isLoggedIn');
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

const buttons   = Array.from(document.getElementsByClassName('btn'));
const authLinks = Array.from(document.getElementsByClassName('auth-link'));

if (isLoggedIn === 'true' && loggedInUser) {

    // Hide all sign up / login buttons
    buttons.forEach(btn => btn.style.display = 'none');
    authLinks.forEach(link => link.style.display = 'none');

    // Show logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.classList.remove('hidden');

    console.log(`Welcome back ${loggedInUser.fName}!`);

} else {

    buttons.forEach(btn => btn.style.display = '');
    authLinks.forEach(link => link.style.display = '');

    // Hide logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.classList.add('hidden');
}

// Logout
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loggedInUser');
        window.location.reload();
    });
}

// searching for input fields

const locationInput = document.getElementById('location');
const typeInput = document.getElementById('type');
const priceInput = document.getElementById('price');