import { state } from "../variables/state.js";

import { renderHome } from "../pageLoaders/home.js";

export function renderPage(){
    switch(state.route.page){

        case "home":
            renderHome();
            break;
        default:

            console.warn(`Unknown page "${state.route.page}"`);

    }
}