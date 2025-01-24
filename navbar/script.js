const navdrops = document.querySelectorAll('.nav_drop');

navdrops.forEach(navdrop =>{
    navdrop.addEventListener('click', ()=> {
        document.querySelector('.show')?.classList.remove('show');
        navdrop.classList.add('show');
    });
});