const checkbox = document.getElementById('chk');
const moon = document.querySelector('.fa-moon');
const hamburger = document.getElementById('hamburger-btn');
const nav = document.getElementById('navbar');
const body = document.getElementById('body-container');
const header = document.getElementById('header');

// toggle dark mode
checkbox.addEventListener('change', toggleDarkMode);
function toggleDarkMode () {
    body.classList.toggle('dark');
    moon.classList.toggle('hidden')
}

// navbar
const navbar = () => {
    const showNavbar = () => {
        if(hamburger && nav && body && header){
            hamburger.addEventListener('click', () => {
                //show navbar
                nav.classList.toggle('show');
                //change icon to x on toggle
                hamburger.classList.toggle('fa-times');
                //add padding to body
                body.classList.toggle('body-padding');
                 //add padding to header
                header.classList.toggle('header-padding');
            });
        }
    }
    
    showNavbar();

    // change active links on navbar 
    const linkColor = document.querySelectorAll('.nav-link');

    function colorLink () {
        if(linkColor) {
            linkColor.forEach((link) => {
                link.classList.remove('active');
                this.classList.add('active');
            });
        }
    }

    linkColor.forEach((link) => {
        link.addEventListener('click', colorLink);
    });
}

navbar();