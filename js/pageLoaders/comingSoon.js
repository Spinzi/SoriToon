import { renderHeader } from "../sectionsLoader/header.js";
import { renderComingSoon } from "../sectionsLoader/comingSoon.js";

export async function renderComingSoonPage(){
    await renderHeader();
    await renderComingSoon();
}