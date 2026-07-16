export function loadCSS(url){
    const mainHead = window.top.document.head;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;

    mainHead.append(link);
}