/*Navbar*/
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

/* Toggle open/close menu */
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
})

/* Slider */
const pag = document.querySelectorAll('.pag');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const img = document.querySelector('.slider-img');
const overlay = document.querySelector('.overlay');
const anim = document.querySelectorAll('.anim');

/*Get the CSS variables from root*/
const r = document.querySelector(':root');
const rs = getComputedStyle(r);

let id = 0;

/* Image paths */
const images = [
  './img/img2.jpg',
  './img/img2.jpg',
  './img/img2.jpg',
  './img/img2.jpg',
  './img/img2.jpg',
];

const colors = [
  '#feb57b',
  '#feb57b',
  '#feb57b',
  '#feb57b',
  '#feb57b',
];

function retrigAnim() {
  // retrigger animations
  for(let i = 0; i < anim.length; i++) {
    anim[i].style.animation = 'none';
    anim[i].offsetHeight;
    anim[i].style.animation = null;
  }
}

function slider(i) {
  // retrigger animations
  retrigAnim();
  // reset image source
  img.src = images[i];
  // rechange color
  r.style.setProperty('--accent', colors[i]);
  // toggle active class to pagination
  // remove active class from all
  for(let i = 0; i < pag.length; i++) {
    pag[i].classList.remove('active');
  }
  // reset active class to clicked pagination
  pag[i].classList.add('active');
}

/* Pagination */
for(let i = 0; i < pag.length; i++) {
  // add click event for all pagination
  pag[i].addEventListener('click', () => {
    // run slider func
    slider[i];
    // set id to clicked pagination index
    id = i;
    // stop auto slide
    stopAutoSlide()
  });
}
