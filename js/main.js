import { initAction } from "./helpers/actions.js";

import { loadCSS } from "./helpers/loadCSS.js";

import { parseRoute } from "./helpers/route.js";

import { renderPage } from "./helpers/renderPage.js";

import { initEssentials } from "./essentials/main.js";
import { loadLanguage } from "./essentials/lang.js";

import { openModal } from "./helpers/modal.js";

document.addEventListener("DOMContentLoaded", async ()=>{
    const startTime = performance.now();
    await loadCSS("css/colours_pallete.css");
    await loadCSS("css/root.css");
    
    await initEssentials();
    
    await parseRoute();
    await initAction();
    await renderPage();
    
    await loadLanguage();
    const endTime = performance.now();
    console.log(`App loaded in ${(endTime - startTime).toFixed(0)}ms`);
});