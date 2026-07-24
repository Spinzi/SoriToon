import { renderHeader } from "../sectionsLoader/header.js";
import { renderSection1 } from "../sectionsLoader/section_1.js";
import { renderSection2 } from "../sectionsLoader/section_2.js";


export async function renderHome(){

    await renderHeader();

    await renderSection1();

    await renderSection2();

    const app = document.getElementById("app");
    
}