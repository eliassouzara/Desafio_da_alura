export let mobile;
const head = document.querySelector("head");
const css = "body main .container .botoes ul li:hover, .container-mensagem .botao-copiar:hover { transform: scale(1.0) }";
const style = document.createElement('style');

function aplicarEstilo() {
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
}

function removerEstilo() {
    if (style.parentNode) {
        head.removeChild(style);
    }
}

function verificarMobile() {
    if (/Android|webOS|/i.test(navigator.userAgent)) {
        mobile = true;
        aplicarEstilo();
    } else {
        mobile = false;
        removerEstilo();
    }
}

verificarMobile();
window.addEventListener("load", verificarMobile);
window.addEventListener("resize", verificarMobile);
