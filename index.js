const hamBtn = document.querySelector('.ham-menu');
const nav = document.querySelector('.nav-links');

hamBtn.addEventListener('click', () => {
    nav.classList.toggle('deactive')
})