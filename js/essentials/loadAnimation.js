export async function remove_loader(){
    const loader = document.getElementById('loader');
    if (!loader) return;

    loader.classList.add('hidden');

    // remove from DOM after the fade-out animation finishes
    loader.addEventListener('animationend', () => loader.remove(), { once: true });
}