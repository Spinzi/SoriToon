import { loadCSS } from "../helpers/loadCSS.js";


export async function renderSection6(){
    console.log("Starting section 6...");
        
    await loadCSS("css/sections/section_6.css");

    const app = document.getElementById("app");
    const section = document.createElement("div");

    app.appendChild(section);

    console.log("Finished section 6.");
}