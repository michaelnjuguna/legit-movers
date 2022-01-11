"strict";
var firstStick = document.querySelector(".first-stick");
var secondStick = document.querySelector(".second-stick");
var mobileNav = document.querySelector(".mobile-navbar")
var modal = document.querySelector(".modal")
//hambuger animation
function navOpen() {
  firstStick.classList.toggle("first-stick__rotate");
  secondStick.classList.toggle("second-stick__rotate");
  mobileNav.classList.toggle("display");
  modal.classList.toggle("display");
}
//modal nav close
function navClose() {
  firstStick.classList.toggle("first-stick__rotate");
  secondStick.classList.toggle("second-stick__rotate");
  mobileNav.classList.toggle("display");
  modal.classList.toggle("display");
}

//carousel
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}