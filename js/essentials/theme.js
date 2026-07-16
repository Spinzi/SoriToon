export function loadTheme(){
    const theme = localStorage.getItem("theme") ?? "light";
    document.documentElement.dataset.theme = theme;
}

export function setTheme(theme){
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
}