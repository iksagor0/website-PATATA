// Header sticky
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    var scroll = window.scrollY;

    if (scroll > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});





// Sidebar
const sideBtn = document.querySelector('.side-btn');
const sideBar = document.querySelector('.nav_bar');

sideBtn.addEventListener('click', () => {
    sideBar.classList.toggle('sidebar');
    sideBtn.classList.toggle('changed');
});


const navItem = document.querySelectorAll('.nav_bar ul li a');

navItem.forEach(item => {
    item.addEventListener('click', () => {
        sideBar.classList.remove('sidebar');
        sideBtn.classList.remove('changed');
    });
});



// Nav Item Active
// ** Nav item already a variable
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    var current;
    sections.forEach(section => {
        var sectionTop = section.offsetTop

        if (pageYOffset >= (section.offsetTop - (section.clientHeight / 3))) {
            current = section.getAttribute('id');
        }
    });

    navItem.forEach(item => {
        item.classList.remove('active');

        if (item.classList.contains(current)) {
            item.classList.add('active');
        }
    });
});