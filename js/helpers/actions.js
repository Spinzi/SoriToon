import { loadLanguage } from "../essentials/lang.js";
import { get_cache } from "../variables/cache.js";
import { openModal } from "./modal.js";
export async function initAction(){

    document.addEventListener("click", async (event) => {


        const target = event.target.closest("[data-action]");

        if(target){

            const action = target.dataset.action;

            if(action.startsWith("share-")){
                let share = action.slice(6);
                
                if(navigator.share){
                    navigator.share({
                        url: share
                    });
                }else{
                    navigator.clipboard.writeText(share);
                }
                
                return;
            }

            if(action.startsWith("goto-")){
                let goto = action.slice(5);
                console.log(goto);
                window.location.href = goto;
                return;
            }

            switch(action){
                case "header_toggle_button":
                    document.querySelector(".hamburger_section").classList.toggle("active");
                    document.querySelector(".hamburger").classList.toggle("active");
                    console.log("activating");
                    break;
                case "closeModal":
                    document.getElementById("modal_overlay").classList.toggle('active');
                    break;
                case "openArt":
                    const id = target.dataset.id;
                    const data = await get_cache("data/cards/gallery.json");
                    const item = data.find(item => item.id === id);
                    console.log(item);
                    await openModal([
                        {
                            type:"img",
                            src:item.image
                        },
                        {
                            type:"buttons",
                            buttons:[
                                {
                                    translate: "distribuie",
                                    action: `share-/?page=galerie&id=${item.id}`,
                                },
                                {
                                    translate: "vezi_in_galerie",
                                    action: "",
                                }
                            ]
                        }
                    ]);
                    loadLanguage();
                    break;
            }
        }else{
            console.log("Did not find data-action on click");
            console.log(event.target);
        }


    });

}