const texts = [
    "Desenvolvedor Front-End",
    "Desenvolvedor Back-End",
    "Estudante"
];
const typingElement = document.getElementById("typing");
let index = 0;
let textIndex = 0;
let typingSpeed = 100; // Tempo para digitar
let deletingSpeed = 50; // Tempo para apagar
let pauseBetweenTexts = 1500; // Pausa entre textos

function type() {
    if (index < texts[textIndex].length) {
        typingElement.textContent += texts[textIndex].charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    } else {
        // Pausa antes de apagar
        setTimeout(deleteText, pauseBetweenTexts);
    }
}

function deleteText() {
    if (index > 0) {
        typingElement.textContent = texts[textIndex].substring(0, index - 1);
        index--;
        setTimeout(deleteText, deletingSpeed);
    } else {
        // Avança para o próximo texto
        textIndex = (textIndex + 1) % texts.length; // Cicla os textos
        setTimeout(type, typingSpeed); // Inicia a digitação do próximo texto
    }
}

type();