
const hamberger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__links li");



hamberger.addEventListener('click' , function(){
    navlinks.classList.toggle("open");
    links.forEach(element => {
        element.classList.toggle("fade");
    });
})

