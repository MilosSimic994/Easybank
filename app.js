const hamburger = document.querySelector('.hamb')
const bg = document.querySelector('#bg')
const nav = document.querySelector('.nav')

hamburger.addEventListener('click', ()=> {

    
    bg.classList.toggle('bg-mob')
    nav.classList.toggle('show-link')
    console.log(nav.classList.contains('show-link'));

    if(bg.classList.contains('bg-mob')) {
        hamburger.src = '/images/icon-close.svg'
    }else {
        hamburger.src = '/images/icon-hamburger.svg'
    }
    
})