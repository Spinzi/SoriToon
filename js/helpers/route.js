import { state } from "../variables/state.js";

export function parseRoute(){
    const params = new URLSearchParams(window.location.search);

    state.route = {
        page: params.get("page") ?? "home"
    }

    if(!params.get("page")){
        history.pushState(
            {},
            "",
            "?page=home"
        )
    };

    console.log(state);
}