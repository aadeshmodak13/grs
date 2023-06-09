AOS.init();
/*Nav bar */
const nav_class=document.querySelector(".nav");
const showNavbar= () =>{
    nav_class.classList.toggle('active');
}

const mobile_nav = document.querySelector(".nav-btn");
mobile_nav.addEventListener('click',()=>showNavbar());

/* Preloader */
const preload=document.querySelector(".preloader");

const hideLoader= () =>{
    preload.classList.add('hide-preloader');
}
preload.addEventListener('load',hideLoader());

/* background image slider */
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);

/* Sticky navbar */
document.addEventListener('scroll',sticky);
window.addEventListener('scroll',sticky);
const sticked=document.getElementById('header');
function sticky(){
  if(scrollY > 10){
      sticked.classList.add('sticked');
  }else{
    sticked.classList.remove('sticked');
  }
}

/* Up arrow button */
var arrow=document.querySelector('.up-arrow');
document.addEventListener('scroll',showUp);
function showUp(){
  if(scrollY > 50){
    arrow.style.display='block';
  }else{
    arrow.style.display='none';
  }
}
arrow.addEventListener('click',scrollTop);
function scrollTop(){
  document.body.scrollTop=0;
  document.documentElement.scrollTop = 0;
}


/* Library page */

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
      items: 10,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      center: false,
      margin: 10,
      slideBy: 1,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              loop: true,
          },
          480: {
              items: 2,
              loop: true,
          },
          600: {
              items: 3,
              loop: true,
          },
          1000: {
              items: 5,
              loop: true,
          }
      }
  });
});