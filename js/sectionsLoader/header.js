import { loadCSS } from "../helpers/loadCSS.js";

export function renderHeader(){

    loadCSS("css/header.css");

    console.log("Rendering header");

    const app = document.getElementById("app");

    const hd = document.createElement("header");

    const h_spacer = document.createElement("div");
    h_spacer.classList = "h_spacer";

    //creating two versions of the header in order to offer support for both pc and mobile
    const pc_hd = document.createElement("div");
    pc_hd.classList = "pc_header";
    const mb_hd = document.createElement("div");
    mb_hd.classList = "mb_header";

    const header_title = document.createElement("h1");
    header_title.innerText = "SoriToon";

    const header_links = [
        "cum_comand", "galerie", "cine_sunt", "contact"
    ];
    
    const ul = document.createElement("ul");

    for(const key in header_links){
        const value = header_links[key];
        const li_el = document.createElement('li');
        const a_el = document.createElement('a');
        a_el.href = `?page=${value}`;
        a_el.dataset.translate = value;
        li_el.appendChild(a_el);
        ul.appendChild(li_el);
    }

    const 
    user_acc = document.createElement("li"),
    user_acc_a = document.createElement("a"),
    user_acc_logo = document.createElement("img"),
    shopping_cart = document.createElement("li"),
    shopping_cart_a = document.createElement("a"),
    shopping_cart_logo = document.createElement("img");

    user_acc_logo.src = "data/images/icons/user_acc.svg";
    shopping_cart_logo.src = "data/images/icons/shopping_cart.svg";

    user_acc_a.href = "?page=cont";
    shopping_cart_a.href = "?page=cos_cumparaturi";

    user_acc_a.appendChild(user_acc_logo);
    shopping_cart_a.appendChild(shopping_cart_logo);

    user_acc.appendChild(user_acc_a);
    shopping_cart.appendChild(shopping_cart_a);

    ul.appendChild(user_acc);
    ul.appendChild(shopping_cart);

    //PC VERSION

    const h_cpy = header_title.cloneNode(true);
    pc_hd.appendChild(h_cpy);
    
    const h_s_cpy = h_spacer.cloneNode(true);
    pc_hd.appendChild(h_s_cpy);

    const u_cpy = ul.cloneNode(true);
    pc_hd.appendChild(u_cpy);

    //PHONE UTILS

    const topSection = document.createElement("div");
    topSection.classList = "top_section";

    const hamburgerSection = document.createElement("div");
    hamburgerSection.classList = "hamburger_section";
    
    const dropdownBtn = document.createElement("button");
    const dropdownBtnImg = document.createElement("img");
    dropdownBtnImg.src="data/images/icons/hamburger.svg";
    dropdownBtn.appendChild(dropdownBtnImg);
    dropdownBtn.dataset.action = "header_toggle_button";
    
    topSection.appendChild(header_title);
    topSection.appendChild(h_spacer);
    topSection.appendChild(dropdownBtn);

    hamburgerSection.appendChild(ul);

    //PHONE VERSION

    mb_hd.appendChild(topSection);
    mb_hd.appendChild(hamburgerSection);
    
    hd.appendChild(pc_hd);
    hd.appendChild(mb_hd);

    app.appendChild(hd);
}