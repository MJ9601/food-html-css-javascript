let menuBar = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let scroller = document.querySelector('#scroll');


function loader() {
    document.querySelector('.main-container').classList.remove('loader-actived');
    document.querySelector('.loader').classList.remove('loader-actived');
}
function display(){
    setInterval(loader, 2000);
}
window.onload = display();

window.onscroll = () =>{
    menuBar.classList.remove('fa-times');
    navbar.classList.remove('active');
    if (window.scrollY > 60) {scroller.classList.add('shown');}
    else {scroller.classList.remove('shown');}
}

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

