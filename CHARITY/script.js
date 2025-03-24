var logo = document.querySelector('.parallax img');

window.addEventListener('scroll', () => {
    var value = window.scrollY;
    logo.style.top = `calc(50% + ${value * 0.5}px)`;
});