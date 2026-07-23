export async function renderSection2(){

    loadCSS("css/sections/section_1.css");
    
    const app = document.getElementById("app");

    //main section_1

    const section = document.createElement("section");
    section.classList = "section_2";

    //title and cards

    const title = document.createElement("h3");

    const cards = document.createElement("div");

    title.dataset.translation = "s_2_cat";

    //fetch the cards info

    
}