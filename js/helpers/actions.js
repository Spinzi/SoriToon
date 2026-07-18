export function initAction(){

    document.addEventListener("click", (event) => {


        const target = event.target.closest("[data-action]");

        if(target){

            const action = target.dataset.action;

            switch(action){
                case "header_toggle_button":
                    document.querySelector(".hamburger_section").classList.toggle("active");
                    document.querySelector(".hamburger").classList.toggle("active");
                    console.log("activating");
                    break;

            }

            console.log(action);
        }else{
            console.log("Did not find data-action on click");
            console.log(event.target);
        }


    });

}