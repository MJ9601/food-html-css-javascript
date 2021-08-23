let menuBar = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


window.onscroll = () =>{
    menuBar.classList.remove('fa-times');
    navbar.classList.remove('active');
}
menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

