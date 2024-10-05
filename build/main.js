const form = document.querySelector("form");
form.addEventListener("submit", calculate);
function calculate() {
    try {
        const nameElement = document.getElementById("name");
        const heightElement = document.getElementById("heigth");
        const weightElement = document.getElementById("weight");
        if (!nameElement || !heightElement || !weightElement) {
            throw new Error("Erro: Não foi possível encontrar os elementos de entrada.");
        }
        const name = nameElement.value;
        const height = parseFloat(heightElement.value);
        const weight = parseFloat(weightElement.value);
        if (isNaN(height) || isNaN(weight)) {
            throw new Error("Erro: Altura ou peso inválidos.");
        }
        const IMC = (weight / (height * height));
        const message = display(IMC, name);
        displayMessage(message);
    }
    catch (error) {
        displayMessage(`Error: ${error}`);
    }
}
function display(IMC, nome) {
    switch (true) {
        case IMC < 18.5:
            return `${nome} você está abaixo do peso. Seu peso é ${IMC.toFixed()}.`;
        case IMC < 25:
            return `${nome} você está com peso ideal. Seu peso é ${IMC.toFixed()}.`;
        case IMC < 30:
            return `${nome} você está levemente acima do peso. Seu peso é ${IMC.toFixed()}.`;
        case IMC < 35:
            return `${nome} você está com obesidade grau I. Seu peso é ${IMC.toFixed()}.`;
        case IMC < 40:
            return `${nome} você está com obesidade grau II. Seu peso é ${IMC.toFixed()}.`;
        case IMC < 50:
            return `${nome} você está com obesidade grau III! Seu peso é ${IMC.toFixed()}.`;
        default:
            return `Os valores: ${nome} ou ${IMC} não foram definido corretamente!`;
    }
}
function displayMessage(message) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = message;
}
export {};
