import { renderHeader } from "../sectionsLoader/header.js";
import { renderPageErr } from "../sectionsLoader/pageErr.js";

export async function renderErr(){
    await renderHeader();
    await renderPageErr();

}