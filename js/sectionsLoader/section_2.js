import { loadCSS } from "../helpers/loadCSS.js";
import { loadSVG } from "../helpers/loadSVG.js";

export async function renderSection2(){

    console.log("Starting to load Section 2");

    loadCSS("css/sections/section_2.css");
    
    const app = document.getElementById("app");

    //main section_1

    const section = document.createElement("section");
    section.classList = "section_2";

    //title and cards

    const title = document.createElement("h3");

    const cards = document.createElement("div");

    title.dataset.translate = "s_2_cat";

    //fetch the cards info

    const cardResp = await fetch("data/cards/categories.json");
    if(!cardResp.ok){
        console.error(`Could not fetch card response in section 2\n${cardResp.status}`);
    }
    const cardJSON = await cardResp.json();

    for(const key in cardJSON){
        const el = cardJSON[key];
        console.log(el);
        
        const card = document.createElement("div");
        
        card.innerHTML = `
            ${(await loadSVG(el["svg"])).outerHTML}
            <p data-translate="${el["translation"]}"></p>
        `;

        cards.appendChild(card);
        
    }

    section.appendChild(title);
    section.appendChild(cards);

    console.log(section);

    app.appendChild(section);

    console.log("Appended section 2 to app.");
}