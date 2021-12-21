let titleWriter = 0;
let sloganWriter = 0;
let titleString = "PlanCo.";
let sloganString = "Plan. Cooperate. Coordinate. ";
let speed = 200;


function typeTitle() {
  if (titleWriter < titleString.length) {
    document.getElementById("welkomTitel").innerHTML += titleString.charAt(titleWriter);
    titleWriter++;

    setTimeout(typeTitle, 50);
  }

}

function typeSlogan() {
  if (sloganWriter < sloganString.length) {
    document.getElementById("sloganTitel").innerHTML += sloganString.charAt(sloganWriter);
    sloganWriter++;

    setTimeout(typeSlogan, 8);
  }
}





// Slides
let slides = document.getElementById('slides');
let mainSlideText = document.getElementById('mainSlideText');
let buttonDiv = document.getElementById("slideButtons");
let slide1 = document.getElementById('slide1');

// Knoppen voor slides
let slideB1 = document.getElementById('slideB1');
let slideB2 = document.getElementById('slideB2');
let slideB3 = document.getElementById('slideB3');

function keepSlide() {
  // Keeps slide at given position after animation plays
  slides.style.marginTop = '0px';
  mainSlideText.style.animation = 'fadein 2s';
}
function stayOnScreen() {
  mainSlideText.style.opacity = '1';
}
slides.addEventListener("animationend", keepSlide);
mainSlideText.addEventListener("animationend", stayOnScreen);


let tel = 0;

setInterval(function(){
  tel++;
  currentSlide(tel);
  if (tel > 3){
    tel = 0;
  }
  
},6000);

function currentSlide(now){
    if (now == 1){
      slide1.style.backgroundImage = "url('images/gif3.gif')";
      slideB2.className = "far fa-circle";
      slideB1.className = "fas fa-circle";
      slideB3.className = "far fa-circle";
      mainSlideText.innerHTML = "Gemakkelijk jouw planningen <br>ordenen op de gewenste dagen.";
    }
    if (now == 2){
      slide1.style.backgroundImage = "url('images/gif2.gif')";
      slideB2.className = "fas fa-circle";
      slideB3.className = "far fa-circle";
      slideB1.className = "far fa-circle";
      mainSlideText.innerHTML = "Meteen verder kunnen met de <br>opgegeven opdracht.";
    }
    if (now == 3){
      slide1.style.backgroundImage = "url('images/gif1.gif')";
      slideB3.className = "fas fa-circle";
      slideB2.className = "far fa-circle";
      slideB1.className = "far fa-circle";
      mainSlideText.innerHTML = "Op elk moment zijn wij er voor jou,<br> zodat jouw problemen snel verholpen worden.";
    }
}






// Check Positie
var slidesHeight = slides.offsetHeight;
var slidesWidth = slides.offsetWidth;

function elementInViewport() {

  var bounding = slides.getBoundingClientRect();

  if (bounding.top >= -slidesHeight
    && bounding.left >= -slidesWidth
    && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + slidesWidth
    && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + (slidesHeight - 50)) {

    slides.style.visibility = 'visible';
    slides.style.animation = 'slidein 1s';
  }
}

document.addEventListener('scroll', elementInViewport);















setTimeout(typeSlogan(), 3000);
typeTitle();
