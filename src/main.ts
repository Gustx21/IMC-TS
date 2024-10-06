const form: HTMLFormElement = document.querySelector("form") as HTMLFormElement;
form.addEventListener("submit", calculate);

function calculate(): void {
  try {
    const nameElement: HTMLInputElement = document.getElementById("name") as HTMLInputElement;
    const heightElement: HTMLInputElement = document.getElementById("heigth") as HTMLInputElement;
    const weightElement: HTMLInputElement = document.getElementById("weight") as HTMLInputElement;
    const date: Date = new Date();

    if (!nameElement || !heightElement || !weightElement) {
      throw new Error("Erro: Não foi possível encontrar os elementos de entrada.");
    }

    // Converter valores para número
    const name: string = nameElement.value;
    const height: number = parseFloat(heightElement.value);
    const weight: number = parseFloat(weightElement.value);

    if (isNaN(height) || isNaN(weight)) {
      throw new Error("Erro: Altura ou peso inválidos.");
    }

    const IMC: number = (weight / (height * height));
  
    const message = display(IMC, name, date);
    displayMessage(message);
  } catch (error) {
    displayMessage(`Error: ${error}`);
  }
}

function display(IMC: number, name: string, date: Date): string {
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
      return `Os valores: ${name} ou ${IMC} não foram definido corretamente!`
  }
}

function displayMessage(message: string): void {
  const resultElement: HTMLElement = document.getElementById("result") as HTMLElement;

  resultElement.textContent = message;
}