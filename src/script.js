import { botoes, botaoCopiar, textArea, bloqueiaCopiar, bloqueiaBotao } from "./hover.js";

const containerPadrao = document.querySelector(".container-padrao");
const containerMensagem = document.querySelector(".container-mensagem");
const mensagem = document.querySelector(".mensagemcpp");

let trocar = true;

// Função que criptografa o texto
function criptografar(texto) {
    mensagem.value = ""; // Limpa a mensagem anterior
    for(let i = 0; i < texto.length; i++) {
        // Substitui as vogais por suas respectivas criptografias
        if(texto[i] == 'a') {
            mensagem.value += "ai";
        } else if(texto[i] == 'e') {
            mensagem.value += "enter";
        } else if(texto[i] == 'i') {
            mensagem.value += "imes";
        } else if(texto[i] == 'o') {
            mensagem.value += "ober";
        } else if(texto[i] == 'u') {
            mensagem.value += "ufat";
        } else {
            mensagem.value += texto[i]; // Mantém o caractere original
        }
    }
}

// Função que descriptografa o texto
function descriptografar(texto) {
    if(texto.indexOf("ai") == -1 && texto.indexOf("enter") == -1 && texto.indexOf("imes") == -1 && texto.indexOf("ober") == -1 && texto.indexOf("ufat") == -1) {
        mensagem.value = "Não possui uma criptografia";
    } else {
        mensagem.value = texto.replaceAll("ai", 'a').replaceAll("enter", 'e').replaceAll("imes", 'i').replaceAll("ober", 'o').replaceAll("ufat", 'u');
    }
}

// Função que troca a exibição dos containers e realiza a criptografia ou descriptografia
function trocarId(e) {
    if(bloqueiaBotao) {
        return;
    }

    mensagem.value = ""; // Limpa a mensagem anterior
    if(e.target.className == "botao1") {
        criptografar(textArea.value);
    } else if(e.target.className == "botao2") {
        descriptografar(textArea.value);
    }

    if(trocar) {
        containerMensagem.removeAttribute("id", "esconder");
        containerPadrao.setAttribute("id", "esconder");
    }
    trocar = false;

    window.scroll(0, 1000); // Rola a janela para baixo
}

// Adiciona o evento de clique para cada botão
botoes.forEach(botao => {
    botao.addEventListener("click", trocarId);
});

// Evento de clique para o botão de copiar
botaoCopiar.addEventListener("click", () => {
    if(bloqueiaCopiar) {
        return;
    }

    mensagem.select();
    document.execCommand("copy");

    window.scroll(0, -1000); // Rola a janela para cima
    setTimeout(() => textArea.focus(), 300); // Foca na área de texto após 300ms
});

// Evento de teclado na área de texto
textArea.addEventListener("keydown", e => {
    if(e.key == "Delete" && e.shiftKey) {
        textArea.value = ""; // Limpa a área de texto
    }
    
    if(e.key == "Enter" && e.altKey && !e.shiftKey) {
        trocarId(e);
        criptografar(textArea.value);
    }
    
    if(e.key == "Enter" && e.altKey && e.shiftKey) {
        trocarId(e);
        descriptografar(textArea.value);
    }

    if(e.key == 'C' && e.altKey && e.shiftKey && !trocar) {
        if(bloqueiaCopiar) {
            return;
        }
    
        mensagem.select();
        document.execCommand("copy");

        
    }
});
