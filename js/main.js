import { initAction } from "./helpers/actions.js";

import { loadCSS } from "./helpers/loadCSS.js";

import { parseRoute } from "./helpers/route.js";

import { renderPage } from "./helpers/renderPage.js";

import { initEssentials } from "./essentials/main.js";
import { loadLanguage } from "./essentials/lang.js";

document.addEventListener("DOMContentLoaded", async ()=>{
    loadCSS("css/colours_pallete.css");
    loadCSS("css/root.css");
    
    initEssentials();
    
    parseRoute();
    initAction();
    renderPage();

    loadLanguage();
});