// Menu Mob Left
let btnMenu = document.getElementById('abrirmenu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('ov')


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// Menu Mob Right

let btncart = document.getElementById('abrircart')
let menu2 = document.getElementById('menucart')
let overlay2 = document.getElementById('ov')


btncart.addEventListener('click', ()=>{
    menu2.classList.add('abrir-menu2')
})

menu2.addEventListener('click', ()=>{
    menu2.classList.remove('abrir-menu2')
})

overlay2.addEventListener('click', ()=>{
    menu2.classList.remove('abrir-menu2')
})
