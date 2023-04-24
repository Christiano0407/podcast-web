//** ==== ==== === Import ===  ==== ==== */
import './style.css';
import microOne from './src/img/micro1.jpg';
import microTwo from './src/img/micro2.jpg';
import microThree from './src/img/imgPodOne.jpg';
import microFour from './src/img/imgPodEight.jpg';
//import { setupCounter } from './counter.js'

//**! === DOM App === */
document.querySelector('#app').innerHTML = `
  <div class="app-main">
     <p class="main-text">Listen</p>
     <figure class="main-figure">
       <img class="main-figure-img" src=${microOne}>
     </figure>
     <p class="main-text">New</p>
     <figure class="main-figure">
       <img class="main-figure-img" src=${microTwo}>
     </figure>
  </div>
  <div class="app-main">
     <p class="main-text">Channel</p>
     <figure class="main-figure">
       <img class="main-figure-img" src=${microThree}>
     </figure>
     <p class="main-text">Podcast</p>
     <figure class="main-figure">
       <img class="main-figure-img" src=${microFour}>
     </figure>
  </div>
  <div class="app-started">
      <p>Podcast is an easy powerful way to create promotion and 
      monetize your podcast.Everything your need a podcast. Welcome!
      </p>
      <button>Get Started <a><i class="fa-solid fa-arrow-right"></i></a></button>
  </div>
`;

//setupCounter(document.querySelector('#counter'));
