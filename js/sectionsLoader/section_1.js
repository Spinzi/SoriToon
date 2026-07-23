import { loadCSS } from "../helpers/loadCSS.js";


function get_paintings_list(){
    
    let txt = "";

    for(let i = 1; i < 15; i++){
        txt += 
        `
        <div class="swiper-slide">
            <img src = "data/images/paintings/${i}.jpeg">
        </div>
        `;
    }
    return txt;
}

/**
 * Section 1 
 * 
 * Responsible for Name, Details + brand image
 */
export async function renderSection1(){

    loadCSS("css/sections/section_1.css");

    const app = document.getElementById("app");

    //main section_1

    const section = document.createElement("section");
    section.classList = "section_1";

    //split into the swiper and the 

    const textDiv = document.createElement("div");
    const swiperDiv = document.createElement("div");

    //images zone stuff

    const swiper_html = `
    <div class="swiper">
        <div class="swiper-wrapper">
            <!-- Slides -->
            ${get_paintings_list()}
            ...
        </div>
        <div class="swiper-pagination"></div>

    </div>
    `;

    swiperDiv.innerHTML = swiper_html;


    // text stuff
    //title
    //description
    //buttons
    //tags

    textDiv.innerHTML = `
        <h3 data-translate="section_1_h"></h3>
        <p data-translate="section_1_p"></p>
        <div class="s_1_buttons">
        
            <button data-translate="cumpara"></button>
            <button data-translate="contact"></button>
        
        </div>
        <div class="tags">
            <ul>
            <li data-translate="livrare_1_3_zile"></li>
            <li data-translate="comunicare_constanta"></li>
            <li data-translate="personalizabil"></li>
            </ul>
        </div>
    `;

    section.appendChild(textDiv);
    section.appendChild(swiperDiv);

    app.appendChild(section);

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,

        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: -80,

        speed: 1200,

        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        grabCursor: true,

        effect: "coverflow",

        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            scale: 0.9,
            slideShadows: false,
        },
    });

}