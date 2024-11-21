// script.js
document.querySelector('.search-bar button').addEventListener('click', function() {
    const location = document.querySelector('.search-bar input').value;
    if (location) {
        alert(`Searching for rent-to-own homes in ${location}...`);
    } else {
        alert('Please enter a city, state, or zip code!');
    }
});
