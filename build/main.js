const form = document.querySelector("form");
form.addEventListener("submit", calculate);
function calculate() {
    try {
        const nameElement = document.getElementById("name");
        const heightElement = document.getElementById("heigth");
        const weightElement = document.getElementById("weight");
        const date = new Date();
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
        const message = display(IMC, name, date);
        displayMessage(message);
    }
    catch (error) {
        displayMessage(`Error: ${error}`);
    }
}
function display(IMC, name, date) {
    switch (true) {
        case IMC < 18.5:
            return `${name} você está abaixo do peso. Seu peso é ${IMC.toFixed()}. ${date}.`;
        case IMC < 25:
            return `${name} você está com peso ideal. Seu peso é ${IMC.toFixed()}. ${date}.`;
        case IMC < 30:
            return `${name} você está levemente acima do peso. Seu peso é ${IMC.toFixed()}. ${date}.`;
        case IMC < 35:
            return `${name} você está com obesidade grau I. Seu peso é ${IMC.toFixed()}. ${date}.`;
        case IMC < 40:
            return `${name} você está com obesidade grau II. Seu peso é ${IMC.toFixed()}. ${date}.`;
        case IMC < 50:
            return `${name} você está com obesidade grau III! Seu peso é ${IMC.toFixed()}. ${date}.`;
        default:
            return `Os valores: ${name} ou ${IMC} não foram definido corretamente!`;
    }
}
function displayMessage(message) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = message;
}
export {};
