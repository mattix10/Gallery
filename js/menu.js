const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.navigation-list');
const nav_item = document.querySelectorAll('.navigation-item');
const cards = document.querySelectorAll('.card-rotate');

const handleClick = () => {
    nav.classList.toggle('navigation-list--active');
    nav_item.forEach( item => {
        item.classList.toggle('navigation-item--active')
    });
}

hamburger.addEventListener('click', handleClick);
cards.forEach( c => {
    c.addEventListener('click', () => {
        c.classList.toggle('rotate');
    });
});


