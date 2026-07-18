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

    const section = document.createElement("section");
    section.classList = "section_1";

    const textDiv = document.createElement("div");
    const imgDiv = document.createElement("div");

    const text_h = document.createElement("h3");
    const text_p = document.createElement("p");

    text_h.dataset.translate = "section_1_h";
    text_p.dataset.translate = "section_1_p";

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


    imgDiv.innerHTML = swiper_html;

    textDiv.appendChild(text_h);
    textDiv.appendChild(text_p);

    section.appendChild(textDiv);
    section.appendChild(imgDiv);

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