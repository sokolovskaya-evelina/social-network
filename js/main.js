const menuBtn = document.querySelector('.m-menu')
const menu =document.querySelector('.menuSidebar')

menuBtn.addEventListener('click', function (){
    menu.classList.toggle('active')
})