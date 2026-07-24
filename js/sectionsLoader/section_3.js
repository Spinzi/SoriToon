import { loadCSS } from "../helpers/loadCSS.js";
import { loadSVG } from "../helpers/loadSVG.js";

export async function renderSection3(){
    console.log("Starting section 3...");
    
    await loadCSS("css/sections/section_3.css");

    const section = document.createElement("div");
    section.classList = "section_3";

    const app = document.getElementById("app");

    const respFet = await fetch("data/cards/shippingSteps.json");

    if(!respFet.ok){
        console.error("Could not fetch steps from shippingSteps.json");
    }

    const shippingStepsJSON = await respFet.json();

    section.innerHTML = `
        <h3 data-translate="s_3_h"></h3>
    `;
    
    const cards_pc = document.createElement("div");
    cards_pc.classList = "only_pc"
    const cards_mob = document.createElement("div");
    cards_mob.classList = "only_mobile";

    let left = 0;

    for(const key in shippingStepsJSON){
        const el = shippingStepsJSON[key];

        const card = document.createElement("div");
        const card2 = document.createElement("div");
        const cardM = document.createElement("div");

        card.innerHTML = `
        <h3 data-translate="${el["h"]}"></h3>
        <p data-translate="${el["p"]}"></p>
        `;
        
        if(left%2 === 0){
            card.classList = "left";
            card2.classList = "right hide only_pc";
        }else{
            card.classList = "right";
            card2.classList = "left hide only_pc";
        }
        
        cardM.innerHTML = `
        <span>${left+1}</span>
        `;
        cardM.classList = "center";
        
        
            cards_mob.appendChild(cardM.cloneNode(true));
            cards_mob.appendChild(card.cloneNode(true));

        if(left%2 === 0){
            cards_pc.appendChild(card);
            cards_pc.appendChild(cardM);
            cards_pc.appendChild(card2);

        }else{
            cards_pc.appendChild(card2);
            cards_pc.appendChild(cardM);
            cards_pc.appendChild(card);
        }


        left++;
    }

    section.appendChild(cards_pc);
    section.appendChild(cards_mob);

    app.appendChild(section);

    console.log("Finished section 3");
}