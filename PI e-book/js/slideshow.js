
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide(){
    var slides = document.querySelectorAll('.slide');
    slides[currentSlide].className = 'slide'
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
  }
