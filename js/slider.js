"use strict";

//sets a variable to data type integer
var slideIndex = 1;

//Initializes the class objects in the showSlides method.
showSlides(slideIndex);

//Each time the link is clicked in increments the slideindex
//by one
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//To get the current slide.
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//A method that receives one value, collects two sets of element objects by class to get
//the images and track each slide.
function showSlides(n) {
  var i;

  //Collects the objects for the slides.
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  //These are resets for the end of the slide.
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  //Eliminates the default styles.
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  //displays the current image by index.
  slides[slideIndex-1].style.display = "block";
}