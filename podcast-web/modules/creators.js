//** === ========== Creators ============ ===  */
//**? === ==== Import ==== === */
import sliderImg from '../src/img/imgpodNew1.jpg';
import sliderImgOne from '../src/img/imgPodTwo.jpg';
import sliderImgTwo from '../src/img/imgPodThree.jpg';
import sliderImgThree from '../src/img/imgPodSix.jpg';
import sliderPodFour from '../src/img/imgPodFive.jpg';
import sliderPodFive from '../src/img/podImage1.jpg';
//**! === Variables === */
const slider = document.querySelector(`#slider`);
const containerSlider = document.querySelector(`#sliderContainer`);
let isDragging = false;
let startPosition = 0;
let currentPosition = 0;

//**! === ==== Slider Carousel ==== === */
slider.innerHTML = `
  <div class="carousel">
    <img class="imgSlider" id="idImg"  src=${sliderImgTwo}>
    <div class="carousel-display">
        <button class="display-icon"><i class="fa-solid fa-play"></i></button>
        <span>How to create your voice in a Podcast</span>
    </div>
  </div>
  <div class="carousel">
    <img class="imgSlider" id="idImg"  src=${sliderImgThree}>
    <div class="carousel-display">
        <button class="display-icon"><i class="fa-solid fa-play"></i></button>
        <span>How to create your voice in a Podcast</span>
    </div>
  </div>
  <div class="carousel">
    <img class="imgSlider" id="idImg"  src=${sliderImgOne}>
    <div class="carousel-display">
        <button class="display-icon"><i class="fa-solid fa-play"></i></button>
        <span>How to create your voice in a Podcast</span>
    </div>
  </div>
  <div class="carousel">
    <img class="imgSlider" id="idImg"  src=${sliderPodFour}>
    <div class="carousel-display">
        <button class="display-icon"><i class="fa-solid fa-play"></i></button>
        <span>How to create your voice in a Podcast</span>
    </div>
  </div>
  <div class="carousel">
     <img class="imgSlider" id="idImg"  src=${sliderPodFive}>
    <div class="carousel-display">
        <button class="display-icon"><i class="fa-solid fa-play"></i></button>
        <span>How to create your voice in a Podcast</span>
    </div>
  </div>
  <div class="carousel">
    <img class="imgSlider" id="idImg"  src=${sliderImgOne}>
    <div class="carousel-display">
        <button class="display-icon"><i class="fa-solid fa-play"></i></button>
        <span>How to create your voice in a Podcast</span>
    </div>
  </div>
  <div class="carousel">
    <img class="imgSlider" id="idImg"  src=${sliderImgTwo}>
    <div class="carousel-display">
        <button class="display-icon"><i class="fa-solid fa-play"></i></button>
        <span>How to create your voice in a Podcast</span>
    </div>
  </div>
`;
//**! === Create a JavaScript function that will handle the slider scrolling ===  */
const scrollSlider = (amount) => {
  slider.style.transform = `translateX(-${amount}%)`;
};

//**! === Call the scrollSlider function when the user scrolls the mouse wheel or swipes on a touch screen === */
containerSlider.addEventListener(`mousedown`, (e) => {
  e.preventDefault();
  isDragging = true;
  startPosition = e.clientX;
});
//**? === Mouse */
containerSlider.addEventListener(`mousemove`, (e) => {
  if (isDragging) {
    const distance = e.clientX - startPosition;
    currentPosition = (distance / containerSlider.clientWidth) * 100;
    scrollSlider(currentPosition);
  }
});
containerSlider.addEventListener(`mouseup`, (e) => {
  isDragging = false;
  scrollSlider(currentPosition);
});
containerSlider.addEventListener(`mouseleave`, (e) => {
  isDragging = false;
  scrollSlider(currentPosition);
});
//**? === Touch */
containerSlider.addEventListener(`touchstart`, (e) => {
  e.preventDefault();
  isDragging = true;
  startPosition = e.touches[0].clientX;
});
containerSlider.addEventListener(`touchmove`, (e) => {
  if (isDragging) {
    const distance = e.touches[0].clientX - startPosition;
    currentPosition = (distance / containerSlider.clientWidth) * 100;
    scrollSlider(currentPosition);
  }
});
containerSlider.addEventListener(`touchend`, (e) => {
  isDragging = false;
  scrollSlider(currentPosition);
});
