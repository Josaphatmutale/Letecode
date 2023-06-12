let btnMenu = document.getElementById('btn-menu');
let navLinks = document.getElementById('nav-links');
// let navLogo = document.getElementById('nav-logo')
let btnClose = document.getElementById('btn-close');

btnMenu.addEventListener('click', (e) => {
   console.log((btnMenu.style.display = 'none') + (navLinks.style.display= 'block'))
})
btnClose.addEventListener('click', (e) => {
    console.log((btnMenu.style.display = 'block') + (navLinks.style.display= 'none') )
})