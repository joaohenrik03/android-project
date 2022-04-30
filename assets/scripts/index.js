const btnHamburger = document.querySelector('#btn-hamburger');

function showMenu() {
    const nav = document.querySelector('.nav-container');
    nav.classList.toggle('show');

    const btnHamburger = document.querySelector('#btn-hamburger');
    btnHamburger.classList.toggle('active');
}

btnHamburger.addEventListener('click', showMenu);


const navItem = document.querySelectorAll('.nav-item');

for (const navLinks of navItem) {
    navLinks.addEventListener('click', function() {
        const nav = document.querySelector('.nav-container');
        nav.classList.toggle('show');
    
        const btnHamburger = document.querySelector('#btn-hamburger');
        btnHamburger.classList.toggle('active'); 
    })
}