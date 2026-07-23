import { renderHeader } from "../sectionsLoader/header.js";
import { renderSection1 } from "../sectionsLoader/section_1.js";


export async function renderHome(){

    await renderHeader();

    await renderSection1();

    const app = document.getElementById("app");
    
}