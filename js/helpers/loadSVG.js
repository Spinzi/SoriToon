export async function loadSVG(path, classList=[]){
    const response = await fetch(path);

    if (!response.ok)
        throw new Error(`Failed to load ${path}`);

    const svgText = await response.text();

    const wrapper = document.createElement("div");
    wrapper.innerHTML = svgText;

    const svg = wrapper.firstElementChild;

    svg.classList.add(...classList);

    return svg;
}