import { renderHeader } from "../sectionsLoader/header.js";
import { renderSection1 } from "../sectionsLoader/section_1.js";
import { renderSection2 } from "../sectionsLoader/section_2.js";
import { renderSection3 } from "../sectionsLoader/section_3.js";


export async function renderHome(){

    await renderHeader();

    await renderSection1();

    await renderSection2();

    await renderSection3();

    const app = document.getElementById("app");
    
}