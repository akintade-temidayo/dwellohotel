const isLoggedIn   = localStorage.getItem('isLoggedIn');
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

// Main buttons (navbar, hero, cards)
const buttons   = Array.from(document.getElementsByClassName('btn'));

// Menu auth links (tablet + mobile dropdowns)
const authLinks = Array.from(document.getElementsByClassName('auth-link'));

if (isLoggedIn === 'true') {

    // Hide main buttons
    buttons.forEach(btn => btn.style.display = 'none');

    // Hide dropdown auth links too
    authLinks.forEach(link => link.style.display = 'none');

    console.log(`Welcome back ${loggedInUser.fName}!`);

} else {

    // Show main buttons 
    buttons.forEach(btn => btn.style.display = 'block');

    // Show dropdown auth links
    authLinks.forEach(link => link.style.display = 'block');

}


// searching for input fields

const location = document.getElementById('location');
const type = document.getElementById('type');
const price = document.getElementById('price');