/* 
   --------------------------------------------------------------------------
   | ACTIVITY DIRECTORY PAGE SLIDING IMAGES AS OVERVIEW OF THE PROJECT |
   --------------------------------------------------------------------------
*/
var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/* 
   ---------------------------------------------
   | READ MORE DIRECTORY READ MORE FUNCTION|
   ---------------------------------------------
*/

function moreFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var readmorebtn = document.getElementById("readmore-btn");

    if (dots.style.display === "none"){
        dots.style.display = "inline";
        readmorebtn.innerHTML = "read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        readmorebtn.innerHTML = "read less";
        moreText.style.display = "inline";
    }
}
