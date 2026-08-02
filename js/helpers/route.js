import { state } from "../variables/state.js";

export function parseRoute(){
    const params = new URLSearchParams(window.location.search);

    state.route = {
        page: params.get("page") ?? "acasa"
    }

    if(!params.get("page")){
        history.pushState(
            {},
            "",
            "?page=acasa"
        )
    };

    console.log(state);
}