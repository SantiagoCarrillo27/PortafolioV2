'use strict'

// Cambio de nombre dinamico del titulo de la pagina
let previousTitle = document.title;

window.addEventListener('blur', () => {
  previousTitle = document.title;
  document.title = '¡No te vayas! ¡Vuelveee!'
})

window.addEventListener('focus', () => {
  document.title = previousTitle;
})

// CAMBIOS AL DARLE SCROLL A LA PAGINA
const navBar = document.querySelector('.nav');

window.addEventListener('scroll', () =>{
    if (window.scrollY > 0) {
      navBar.classList.add('transparent');
    } else {
      navBar.classList.remove('transparent');
    }
})

//CAMBIAR DE SELECCIÓN CUANDO SE DA CLICK EN ALGÚN ITEM DEL NAV //

const items = document.querySelectorAll('.nav__data--items');

// Agrega un event listener a cada elemento
items.forEach(item => {
  item.addEventListener('click', () => {
    // Primero, quita la clase "resaltado" de todos los elementos
    items.forEach(otherItem => {
      otherItem.classList.remove('item--selected');
    });

    // Luego, agrega la clase "resaltado" al elemento que se hizo clic
    item.classList.add('item--selected');
  });
});


// IMPLEMENTACION DE CAMBIO DE TEXTO //

const typed = new Typed('.typed', {
  strings: [
    '<i class="text__change"> FrontEnd Developer </i>',
    ' <i class="text__change"> BackEnd Developer </i>',
    ' <i class="text__change"> Full-Stack Engineer </i>'],
  typeSpeed: 75, // Velocidad de escritura
  backSpeed: 70, // Velocidad de retroceso
  cursorChar: "|",
  loop:true,
  showCursor:true,
  loopCount:true,
  backDelay:1100,
  shuffle:false,
  smartBackSpace:75,
  startDelay:200
});

// TABS CON HTML Y JS

const targets = document.querySelectorAll('[data-target]');
const content = document.querySelectorAll('[data-content]')

targets.forEach(target =>{

  target.addEventListener('click', () =>{

    content.forEach(c =>{
      c.classList.remove('active');
    })

    const t = document.querySelector(target.dataset.target);

    t.classList.add('active')

  })

})

// Mostrar segundo TAB de Skills

function showTab(tabId) {
  // Ocultar todos los contenidos de las pestañas y desactivar los botones
  const tabContents = document.querySelectorAll('.tab-content');
  const tabButtons = document.querySelectorAll('.tab-btn');

  tabContents.forEach(content => {
      content.classList.remove('activo');
  });

  tabButtons.forEach(button => {
      button.classList.remove('activo');
  });

  // Mostrar el contenido de la pestaña seleccionada y activar el botón correspondiente
  const selectedTab = document.getElementById(tabId);
  const selectedButton = document.querySelector(`[onclick="showTab('${tabId}')"]`);

  selectedTab.classList.add('activo');
  selectedButton.classList.add('activo');
}

// Mostrar la primera pestaña al cargar la página
showTab('tab1');
