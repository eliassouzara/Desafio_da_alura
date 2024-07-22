
import { mobile } from "./dispo.js";

export const botoes = document.querySelectorAll("li");

export const botaoCopiar = document.querySelector(".botao-copiar");

export const textArea = document.querySelector(".area-texto");

// Define os caracteres permitidos para a entrada de texto
const caracteresPermitidos = "abcdefghijklmnopqrstuvwxyz \n";
export let bloqueiaCopiar = false;
export let bloqueiaBotao = false;


function bloquearCopiar() {

    let mensagemCript = document.querySelector(".mensagemcpp");
    
  
    if (mensagemCript.value === "Não possui uma criptografia") {
        // Bloqueia o botão de copiar
        botaoCopiar.style.cursor = "not-allowed";
        bloqueiaCopiar = true;
    } else {
        // Desbloqueia o botão de copiar
        botaoCopiar.style.cursor = "pointer";
        bloqueiaCopiar = false;
    }
}

// Função para tornar os botões transparentes e focar na área de texto
function botoesTransparentes(e) {
    // Se não estiver em um dispositivo móvel
    if (!mobile) {
     
        botoes.forEach(botao => {
            botao.classList.toggle("transparente");
        });
    }

    
    if (e.type === "mouseout" && window.innerWidth > 768) {
        // Foca na área de texto
        textArea.focus();
    }

    // Chama a função para bloquear o botão de copiar
    bloquearCopiar();
}


botaoCopiar.addEventListener("mouseover", botoesTransparentes);
botaoCopiar.addEventListener("mouseout", botoesTransparentes);

// Adiciona eventos 'mouseover' a cada botão na lista de 'botoes'
botoes.forEach(botao => {
    botao.addEventListener("mouseover", function() {
     
        for (let i = 0; i < textArea.value.length; i++) {
            if (!caracteresPermitidos.includes(textArea.value[i])) {
                bloqueia = true;
                break;
            }
        }

        // Se a área de texto estiver vazia ou contiver caracteres não permitidos
        if (textArea.value.length === 0 || bloqueia) {
            
            botao.style.cursor = "not-allowed";
            bloqueiaBotao = true;
        } else {
            
            botao.style.cursor = "pointer";
            bloqueiaBotao = false;
        }
    });
});
