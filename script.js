
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')

})
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')

})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')

})


let elemSkills = document.querySelector(".skills");
let elemContainer = document.querySelector(".skills-container");
let elemItens = Array.from(elemContainer.children);

elemItens.forEach((item) => {
    let elemDuplicado = item.cloneNode(true);

    elemContainer.appendChild(elemDuplicado);
});


