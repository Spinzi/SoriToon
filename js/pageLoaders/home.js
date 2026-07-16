import { renderHeader } from "../sectionsLoader/header.js";

export function renderHome(){

    renderHeader();

    const app = document.getElementById("app");
    
    app.innerHTML +=`
    
        <img id="logo_img_with_bg" src="data/images/icons/icon.jpeg" alt="logo_img">

    `
}