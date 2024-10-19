let btnMenu = document.getElementById('mob')
let menu = document.getElementById('menu-cell')
let overlay = document.getElementById('overlay-menu-cell')


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})