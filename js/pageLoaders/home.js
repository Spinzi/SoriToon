import { renderHeader } from "../sectionsLoader/header.js";
import { renderSection1 } from "../sectionsLoader/section_1.js";
import { renderSection2 } from "../sectionsLoader/section_2.js";
import { renderSection3 } from "../sectionsLoader/section_3.js";
import { renderSection4 } from "../sectionsLoader/section_4.js";
import { renderSection5 } from "../sectionsLoader/section_5.js";
import { renderSection6 } from "../sectionsLoader/section_6.js";
import { renderSection7 } from "../sectionsLoader/section_7.js";


export async function renderHome(){

    await renderHeader();

    await renderSection1();

    await renderSection2();

    await renderSection3();

    await renderSection4();

    await renderSection5();

    await renderSection6(); // kinda empty until next update

    await renderSection7();
    
}