/*Navbar*/
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const leftDeco = document.querySelector('.left-deco');
const rightDeco = document.querySelector('.right-deco');

let autoSlide;


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
  './img1.JPG',
  './img2.JPG',
  './img3.JPG',
  './img4.JPG',
  './img5.JPG'
];

const colors = [
  '#F5A7B8',
  '#F7DC6F',
  '#ADD8E6',
  '#C2E9FB',
  '#B3E5FC'
];

/* Toggle open/close menu */
next.addEventListener('click', () => {
  id++;
  if(id === images.length) {
    id = 0;
  }
  for (let i = 0; i < pag.length; i++) {
    pag[i].classList.remove('active');
  }
  slider(id);
  pag[id].classList.add('active');
  leftDeco.style.backgroundColor = colors[id];
  rightDeco.style.backgroundColor = colors[id];
  stopAutoSlide();
});

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

prev.addEventListener('click', () => {
  id--;
  if(id < 0) {
      id = images.length - 1;
  }
  for (let i = 0; i < pag.length; i++) {
      pag[i].classList.remove('active');
  }
  slider(id);
  pag[id].classList.add('active');
  leftDeco.style.backgroundColor = colors[id];
  rightDeco.style.backgroundColor = colors[id];
  stopAutoSlide();
});

function stopAutoSlide() {
  clearInterval(autoSlide);
}

function startAutoSlide() {
  autoSlide = setInterval(() => {
    id++;

    if(id === images.length) {
      id = 0;
      }
      slider(id);
      }, 3000);
      }

      function retrigAnim() {
      // retrigger animations
      for(let i = 0; i < anim.length; i++) {
      anim[i].style.animation = 'none';
      anim[i].offsetHeight;
      anim[i].style.animation = null;
      }
      }

      startAutoSlide();

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
      slider(i);
      // set id to clicked pagination index
      id = i;
      // stop auto slide
      stopAutoSlide()
      });
      }
