import education from "./education.js";
import experience from "./experience.js";
import skills from "./skills.js";
import projects from "./projects.js";

const menuHamburger = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu');
})

document.body.onload = function () {
    AOS.init({ duration: 1000 });
    scrollSpy();
    education();
    experience();
    skills();
    projects();
}

function scrollSpy() {

const section = document.querySelectorAll('.section');
const links = document.querySelectorAll('.link');

window.onscroll = () => {
    section.forEach(section => { 
        let top = window.scrollY;
        let offset = section.offsetTop - 10;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            links.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-links a[href*=' + id + ']').classList.add('active');
            });
        };
    })
}
}

