export function initAction(){

    document.addEventListener("click", (event) => {


        const target = event.target.closest("[data-action]");

        if(target){

            const action = target.dataset.action;

            console.log(action);
        }else{
            console.log("Did not find data-action on click");
        }


    });

}