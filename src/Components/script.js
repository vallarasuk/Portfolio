let header = document.querySelector('header');
let menu = document.querySelector('#menu-icons');
let navbar = document.querySelector('#navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

// Dark Mood

let darkMood = document.querySelector('#dark-mood');

darkMood.onclick = () => {
    if (darkMood.classList.contains('bx-moon')) {
        darkMood.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active')
    }
    else {
        darkMood.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.remove('active');
    }
}