import { state } from "../variables/state.js";

import { renderHome } from "../pageLoaders/home.js";
import { renderErr } from "../pageLoaders/err.js";
import { renderComingSoonPage } from "../pageLoaders/comingSoon.js";

export async function renderPage(){
    switch(state.route.page){

        case "acasa":
            await renderHome();
            break;
        case "cont":
            await renderComingSoonPage();
            break;
        case "cos_cumparaturi":
            await renderComingSoonPage();
            break;
        default:
            await renderErr();
            console.warn(`Unknown page "${state.route.page}"`);

    }
}