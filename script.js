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
  if(scrollY > 0){
      sticked.classList.add('sticked');
  }else{
    sticked.classList.remove('sticked');
  }
}

/* Library page */
var index=1;
var bItems=document.getElementsByClassName('b-self');
var bLen=bItems.length;
setInterval(translater,100);
function translater(){
  index++;
  bItems.style.transform='translateX(-${index * 100}%)';

}
console.log(bLen);