//** === ==== Media Javascript ==== ===  */
import '../style.css';
import microBlack from '../src/img/microBlack.jpg';
import microColor from '../src/img/microColor.jpg';
import microAudio from '../src/img/microAudio.jpg';

//**! === Media === */
document.querySelector(`#appList`).innerHTML = `
    <div class="media__list" id="idMediaList">
        <ul class="media__list--plus">
          <li class="media-item"><a><i class="fa-solid fa-photo-film"></i></a><span>Picture in Pictures</span></li>
          <li class="media-item"><a><i class="fa-solid fa-rectangle-ad"></i></a><span>Premium Content</span></li>
          <li class="media-item"><a><i class="fa-solid fa-play"></i></a><span>Premium Music</span></li>
          <li class="media-item"><a><i class="fa-solid fa-video"></i></a><span>4K Video Quality</span></li>
        </ul>
    </div>

     <div class="media__list" id="idMediaList">
        <ul class="media__list--plus">
        <li class="media-item"><a><i class="fa-solid fa-video"></i></a><span>4K Video Quality</span></li>
        <li class="media-item"><a><i class="fa-solid fa-play"></i></a><span>Premium Music</span></li>
        <li class="media-item"><a><i class="fa-solid fa-rectangle-ad"></i></a><span>Premium Content</span></li>
        <li class="media-item"><a><i class="fa-solid fa-photo-film"></i></a><span>Picture in Pictures</span></li>
        </ul>
    </div>
`;
