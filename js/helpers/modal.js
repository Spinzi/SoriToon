import { loadCSS } from "./loadCSS.js";
import mediumZoom from "https://cdn.jsdelivr.net/npm/medium-zoom@1.1.0/+esm";
/**
 * Opens a dynamic modal.
 *
 * @param {Array<Object>} data Array of modal items to render.
 *
 * Supported item types:
 * @param {"heading"} data[].type
 * @param {string} data[].translate Translation key for the heading.
 *
 * @param {"text"} data[].type
 * @param {string} data[].translate Translation key for the paragraph.
 *
 * @param {"img"} data[].type
 * @param {string} data[].src Image source.
 * @param {string} [data[].alt] Alternative text.
 *
 * @param {"buttons"} data[].type
 * @param {{translate: string, action: string, class?: string}[]} data[].buttons Buttons to display.
 *
 * @param {"cmd"} data[].type
 * @param {{type: "closeBtn", value: boolean}[]} data[].cmd Modal commands.
 *
 * @example
 * openModal([
 *   {
 *     type: "heading",
 *     translate: "welcome.title"
 *   },
 *   {
 *     type: "text",
 *     translate: "welcome.description"
 *   },
 *   {
 *     type: "img",
 *     src: "./img/logo.png",
 *     alt: "Logo"
 *   },
 *   {
 *     type: "buttons",
 *     buttons: [
 *       {
 *         translate: "ok",
 *         action: "closeModal",
 *         class: "primary"
 *       }
 *     ]
 *   },
 *   {
 *     type: "cmd",
 *     cmd: [
 *       {
 *         type: "closeBtn",
 *         value: true
 *       }
 *     ]
 *   }
 * ]);
 */
export async function openModal(data){

    if (!Array.isArray(data)) {
        throw new TypeError("openModal expected an array.");
    }

    const modal = document.getElementById("modal");
    let html = "";

    let modalSettings = {
        "closeBtn": true
    }

    modal.innerHTML = ``;

    for(const item of data){
        switch(item.type){

            case "heading":
                
                html += 
                `
                <h3 data-translate="${item.translate}"></h3>
                `;

                break;

            case "text":

                html += 
                `
                <p data-translate="${item.translate}"></p>
                `;

                break;

            case "img":

                html += 
                `
                <img src="${item.src}" alt="${item.alt ?? ""}" class="zoomable" >
                `;

                break;

            case "buttons":

                let btns = ``;
                for(const btn of item.buttons){
                    btns += `
                    <button data-translate="${btn.translate}" data-action="${btn.action}" class="${btn.class ?? ""}"></button>
                    `
                }

                html +=
                `
                <div class="btn_holder">
                ${btns}
                </div>
                `;

                break;

            case "cmd":

                for(const cmd of item.cmd){
                    switch(cmd.type){
                        case "closeBtn":
                            modalSettings.closeBtn = cmd.value;
                            break;
                        default:
                            break;
                    }
                }

                break;

            default:
                break;
        }
    }

    if(modalSettings.closeBtn)
        html =
            `<button data-action="closeModal" class="close">✕</button>` +
            html;
    
    modal.innerHTML = html;

    mediumZoom(".zoomable", {
        background: "rgba(0,0,0,0.8)",
        margin: 24
    });

    const overlay = document.getElementById("modal_overlay");
    overlay.classList.toggle("active");

}