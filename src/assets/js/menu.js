// alert("HOLAA ESTO ES UNA ALERTA DESDE EL .JSON DEL PROYECTO!!!! :) ")

// const nav = document.querySelector(".nav");

// window.addEventListener('scroll', function(){
//     nav.classList.toggle('activate', window.scrollY > 0)
// })


var navC = document.querySelector(".header-menu-wrapper");

window.addEventListener('scroll', function(){
    navC.classList.toggle('activate', window.scrollY > 0)
})

const navtxt1 = document.querySelector(".txtTitle1", ".txtTitle");

window.addEventListener('scroll', function(){
    navtxt1.classList.toggle('textMenu', window.scrollY > 0)
})

const navtxt2 = document.querySelector(".txtTitle2", ".txtTitle");

window.addEventListener('scroll', function(){
    navtxt2.classList.toggle('textMenu', window.scrollY > 0)
})

const navtxt3 = document.querySelector(".txtTitle3", ".txtTitle");

window.addEventListener('scroll', function(){
    navtxt3.classList.toggle('textMenu', window.scrollY > 0)
})

const navtxt4 = document.querySelector(".txtTitle4", ".txtTitle");

window.addEventListener('scroll', function(){
    navtxt4.classList.toggle('textMenu', window.scrollY > 0)
})