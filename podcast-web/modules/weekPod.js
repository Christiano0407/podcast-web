//** ==== === Week Podcast === ====  */
import '../style.css';
import imgMusic from '../src/img/imgPodEight.jpg';
import imgMusicOne from '../src/img/imgpodNew1.jpg';
import imgMusicTwo from '../src/img/imgPodNew2.jpg';
import imgMusicThree from '../src/img/imgPodNewPlus.jpg';
import imgMusicFour from '../src/img/imgpodnew4.jpg';
import imgMusicFive from '../src/img/imgpodnew5.jpg';
import imgMusicSix from '../src/img/imgPodSix.jpg';

//**! === Podcast Week === */
document.querySelector(`#appWeek`).innerHTML = `
<div class="podcast__week id="idWeek"">

    <div class="podcast__week--top">
        <h2 class="podcast-text-plus">TOP PODCAST OF THE WEEK</h2>
        <div class="podcast-readMore">
            <p class="podcast-paragraph">There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected humour, 
              or words which don't look even slightly believable.
             If you are going to use a passage of Lorem Ipsum.</p>
            <button class="podcast-btn">Read More</button>
        </div>
    </div>

    <div class="podcast__listWeek" id="podList">

        <div class="podcast__listWeek--music">
            <span class="music-number">01</span>
            <figure class="music-figure">
                <img class="music-img" src=${imgMusic}>
            </figure>
            <div class="music-text">
                <p>Stronger Spirit</p>
                <pan>V.O.C.E</pan>
            </div>
            <a class="music-icon">Icon</a>
        </div>

        <div class="podcast__listWeek--music">
            <span class="music-number">02</span>
            <figure class="music-figure">
                <img class="music-img" src=${imgMusicOne}>
            </figure>
            <div class="music-text">
                <p>Stronger Spirit</p>
                <pan>V.O.C.E</pan>
            </div>
            <a class="music-icon">Icon</a>
        </div>

        <div class="podcast__listWeek--music">
            <span class="music-number">03</span>
            <figure class="music-figure">
                <img class="music-img" src=${imgMusicTwo}>
            </figure>
            <div class="music-text">
                <p>Stronger Spirit</p>
                <pan>V.O.C.E</pan>
            </div>
            <a class="music-icon">Icon</a>
        </div>

        <div class="podcast__listWeek--music">
            <span class="music-number">04</span>
            <figure class="music-figure">
                <img class="music-img" src=${imgMusicThree}>
            </figure>
            <div class="music-text">
                <p>Stronger Spirit</p>
                <pan>V.O.C.E</pan>
            </div>
            <a class="music-icon">Icon</a>
        </div>

        <div class="podcast__listWeek--music">
            <span class="music-number">05</span>
            <figure class="music-figure">
                <img class="music-img" src=${imgMusicFour}>
            </figure>
            <div class="music-text">
                <p>Stronger Spirit</p>
                <pan>V.O.C.E</pan>
            </div>
            <a class="music-icon">Icon</a>
        </div>

        <div class="podcast__listWeek--music">
            <span class="music-number">06</span>
            <figure class="music-figure">
                <img class="music-img" src=${imgMusicFive}>
            </figure>
            <div class="music-text">
                <p>Stronger Spirit</p>
                <pan>V.O.C.E</pan>
            </div>
            <a class="music-icon">Icon</a>
        </div>

    </div>

</div>
`;
