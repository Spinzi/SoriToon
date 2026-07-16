export async function loadLanguage(){

    const lang = localStorage.getItem("lang") ?? "ro";

    try {
        const response = await fetch(`data/translations/${lang}.json`);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();

        document.querySelectorAll("[data-translate]").forEach((el)=>{
            const translation = result[el.dataset.translate] ?? "Missing translation";
            console.log(el.dataset.translate);
            el.innerText = translation;
        });

        console.log(result);

    } catch (error) {
        console.error(error.message);
    }

}