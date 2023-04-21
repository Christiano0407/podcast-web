import '../style.css';
import imgLogo from '../src/icon/icons8-kawaii-coffee-48.png';

document.querySelector(`.navigation`).innerHTML = `
   <div  class="navigation-logo">
    <img src= ${imgLogo} class="img-coffee">
     <span>CoffeeHear</span>
   </div>

   <div class="navigation__plus">
      <ul class="navigation__plus--list">
         <li class="list-item">Home</li>
         <li class="list-item">About Us</li>
         <li class="list-item">Episode</li>
         <li class="list-item">Channel</li>
         <li class="list-item" >Pages</li>
         <li class="list-item" >Contact Us</li>
      </ul>
   </div>

   <div class="navigation__media">
    <ul class="navigation__media--list">
       <li class="media-item">Tw</li>
       <li class="media-item">Ins</li>
       <li class="media-item">You</li>
       <li class="media-item">Tik</li>
       <li class="media-item">Twi</li>
    </ul>
   </div>
`;
