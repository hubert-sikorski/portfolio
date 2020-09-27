// Update year
const currentYear = new Date().getFullYear();
document.querySelector('.year').innerHTML = currentYear;

// Disable context menu for avatar
const avatar = document.querySelector('.avatar');
avatar.addEventListener('contextmenu', event => event.preventDefault());
