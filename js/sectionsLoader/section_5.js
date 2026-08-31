import { loadCSS } from "../helpers/loadCSS.js";

export async function renderSection5(){
    console.log("Starting section 5...");
    
    await loadCSS("css/sections/section_5.css");

    const app = document.getElementById("app");
    const section = document.createElement("div");

    section.classList = "section_5";

    section.innerHTML = `

        <h3 data-translate="s_5_h"></h3>
        <div>
            <div>
                <p data-translate="s_5_about"></p>
            </div>
            <div>
                <img
                    src="data/images/queen/773217971_2248103179281128_8855315673475727143_n.jpg"
                    alt="Sorina Profile Picture"
                    loading="lazy"
                >
            </div>
        </div>
    
    `;    

    app.appendChild(section);

    console.log("Finished section 5.");
}