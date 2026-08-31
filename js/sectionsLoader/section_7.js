import { loadCSS } from "../helpers/loadCSS.js";

//F&Q section
export async function renderSection7(){
    console.log("Starting section 7...");
        
    await loadCSS("css/sections/section_7.css");

    const app = document.getElementById("app");
    const section = document.createElement("div");
    section.classList = "section_7";

    let __html = "";

    for(let i = 0; i < 5; i++){
        __html += `
        <details>
            <summary data-translate="q_a_${i}_t">$</summary>
            <p data-translate="q_a_${i}_d"></p>
        </details>
    `;
    }

    section.innerHTML = `
    
    <h3 data-translate="s_7_h"></h3>

    ${__html}

    `;


    app.appendChild(section);

    console.log("Finished section 7.");
}