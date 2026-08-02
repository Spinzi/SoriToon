import { get_cache } from "../variables/cache.js";

export async function loadLanguage(){

    console.log("Starting loadLanguage in website");

    const lang = localStorage.getItem("lang") ?? "ro";


    try {
        const result = await get_cache(`data/translations/${lang}.json`);

        document.querySelectorAll("[data-translate]").forEach((el)=>{
            const translation = result[el.dataset.translate] ?? "Missing translation";
            el.innerHTML = translation;
        });

    } catch (error) {
        console.error(error.message);
    }

    console.log("Finished loadLanguage");
}