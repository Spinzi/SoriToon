import { loadCSS } from "../helpers/loadCSS.js";

export async function renderComingSoon(){
    console.log("Starting section comingSoon...");
    
    await loadCSS("css/sections/comingSoon.css");
    
    const app = document.getElementById("app");
    
    const section = document.createElement("div");
    section.classList = "coming-soon";
    
    section.innerHTML = `
        <h3 data-translate="comingSoon_h"></h3>
        <p data-translate="comingSoon_p"></p>
    `;

    app.appendChild(section);
    
    console.log("Finished section comingSoon.");
}