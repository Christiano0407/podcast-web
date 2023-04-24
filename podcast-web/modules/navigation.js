//** ==== ==== === Import ===  ==== ==== */
import '../style.css';
import imgLogo from '../src/icon/icons8-kawaii-coffee-48.png';
import imgUser from '../src/icon/perfil.png';

//**! === DOM Header & Nav ===  */
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
         <li class="media-item"><i class="fa-brands fa-twitter"></i></li>
         <li class="media-item"><i class="fa-brands fa-instagram"></i></li>
         <li class="media-item"><i class="fa-brands fa-youtube"></i></li>
         <li class="media-item"><i class="fa-brands fa-tiktok"></i></li>
         <li class="media-item"><i class="fa-brands fa-twitch"></i></li>
         <li class="media-item"><i class="fa-brands fa-spotify"></i></li>
      </ul>
   </div>
    
   <div class="navigation__user">
      <figure class="user-figure">
         <img src=${imgUser} class="user-img">
      </figure>
   </div>
`;
