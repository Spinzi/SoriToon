import { state } from "../variables/state.js";

import { renderHome } from "../pageLoaders/home.js";

export async function renderPage(){
    switch(state.route.page){

        case "acasa":
            await renderHome();
            break;
        default:

            console.warn(`Unknown page "${state.route.page}"`);

    }
}