const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const icon = document.getElementById('icon');
    menuButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            icon.src = 'images/sun.png';
        } else {
            icon.src = 'images/moon.png';
        }
    });
});


function updatePageVisitCounter() {
    let count = localStorage.getItem('visitCount') || 0;  // Retrieve the current count from localStorage
    count++;  // Increment the count
    localStorage.setItem('visitCount', count);  // Store the updated count back into localStorage

    const counterElement = document.getElementById('pageVisits');  // Get the element where the count will be displayed
    if (counterElement) {
        counterElement.innerText = `Page Visits: ${count}`;  // Update the element's text with the new count
    }
}