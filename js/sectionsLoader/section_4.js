import { loadCSS } from "../helpers/loadCSS.js";

export async function renderSection4(){
    console.log("Starting section 4...");

    await loadCSS("css/sections/section_4.css");

    const app = document.getElementById("app");
    const section = document.createElement("div");

    section.classList = "section_4";

    const title = document.createElement("h3");
    title.dataset.translate = "s_4_h";
    const swiper = document.createElement("div");
    
    const swiper_fetch_data = await fetch("data/cards/gallery.json");
    if(!swiper_fetch_data.ok){
        console.error("Could not fetch swiper data.");
    }
    
    const swiper_data_json = await swiper_fetch_data.json();

    let swiper_data = "";

    for(const painting of swiper_data_json){

        if(!painting.featured)
            continue;

        swiper_data += `
            <div class="swiper-slide" data-id="${painting.id}" data-action="openArt">
                <img
                    src="${painting.image}"
                    alt="${painting.title}"
                    loading="lazy"
                >

                <div class="overlay">
                    <h4>${painting.title}</h4>
                    <p>${painting.category}</p>
                </div>
            </div>
        `;
    }

    swiper.className = "swiper swiper-gallery";

    swiper.innerHTML = `
        <div class="swiper-wrapper">
            <!-- Slides -->
            ${swiper_data}
        </div>
        <div class="swiper-pagination"></div>
    `;

    section.appendChild(title);
    section.appendChild(swiper);


    app.appendChild(section);

    console.log(swiper);
console.log(swiper instanceof HTMLElement);


    console.log(swiper);
console.log(swiper.outerHTML);
console.log(swiper instanceof Element);


    new Swiper(swiper, {
        slidesPerView: 3,
        spaceBetween: 24,
        centeredSlides: true,
        loop: true,

        pagination: {
            el: swiper.querySelector(".swiper-pagination"),
            clickable: true
        },

        breakpoints: {
            0: {
                slidesPerView: 1.2
            },
            600: {
                slidesPerView: 2
            },
            1000: {
                slidesPerView: 3
            }
        }
    });


    console.log("Finished section 4");
}