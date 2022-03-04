
let nav = document.getElementById('header__nav')
let btn = document.getElementById('burgerBtn')


btn.addEventListener('click',function(){
    btn.classList.toggle('isOpen1'),
    nav.classList.toggle('isOpen2')
})