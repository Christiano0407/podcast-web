//** === ==== Media Javascript ==== ===  */
import '../style.css';
import microBlack from '../src/img/microBlack.jpg';
import microColor from '../src/img/microColor.jpg';
import microAudio from '../src/img/microAudio.jpg';
import microOne from '../src/img/micro1.jpg';
import microTwo from '../src/img/micro2.jpg';
import microPlus from '../src/3d/3DOne.jpg';

//**! === Talk Media === */
document.querySelector(`#appMedia`).innerHTML = `
   <div class="talk__plus">
      <div class="media__talk--global">
         <figure class="figure-talks">
           <img class="img-talks" src=${microAudio}>
         </figure>
         <div class="talk-text">
           <span>Daily About recent latest global</span>
           <p>Talking about latest global issues</p>
         </div>
      </div>
      <div class="media__talk--premium">
         <div class="premium__text">
             <h3>Enjoy podcast on your favorite platform</h3>
             <p>Channel a talk with <spam class="premium-color">premium</spam> video & conference media</p>
             <span> There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected humour, 
              or randomised words which don't look even slightly believable. 
             If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
              anything embarrassing hidden in the middle of text.</span>
            <button class="talk-about" id="talkAbout">About</button>
         </div>
      </div>
   </div>

   <section class="podcast__app" id="appPodcast">
      <div class="podcast__app--new">
         <h2 class="podcast-title">Best News Of This Week</h2>
         <div class="news-texts">
            <p class="podcast-text"> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
               anything embarrassing hidden in the middle of text.
            </p>
            <button class="news-btn">ReadMore</button>
         </div>
      </div>

      <div class="podcast__app--images">
         <div class="images-plus one">
            <figure>
               <img class="micro-images" src=${microAudio}>
            </figure>
         </div>
         <div class="images-plus two">
            <figure>
               <img class="micro-images"  src=${microOne}>
            </figure>
         </div>
         <div class="images-plus three">
            <figure>
               <img class="micro-images"  src=${microPlus}>
            </figure>
         </div>
         <div class="images-plus five">
            <figure>
               <img class="micro-images"  src=${microTwo}>
            </figure>
         </div>
      </div>
   </section>
`;
