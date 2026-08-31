import { loadCSS } from "../helpers/loadCSS.js";

export async function renderPageErr(){
    console.log("Starting section pageErr...");
    
    await loadCSS("css/sections/pageErr.css");
    
    const app = document.getElementById("app");
    
    const section = document.createElement("div");
    section.classList = "page-error";
    
    section.innerHTML = `
        <h3 data-translate="pageErr_h"></h3>
        <p data-translate="pageErr_p"></p>
        <button data-translate="pageErr_btn" onclick="window.location.href='/'"></button>
    `;

    app.appendChild(section);
    
    console.log("Finished section pageErr.");
}