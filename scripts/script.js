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
