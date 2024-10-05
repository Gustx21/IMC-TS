const form: HTMLFormElement = document.querySelector("form") as HTMLFormElement;
form.addEventListener("submit", calculate);

function calculate(): void {
  try {
    const nameElement: HTMLInputElement = document.getElementById("name") as HTMLInputElement;
    const heightElement: HTMLInputElement = document.getElementById("heigth") as HTMLInputElement;
    const weightElement: HTMLInputElement = document.getElementById("weight") as HTMLInputElement;

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
  
    const message = display(IMC, name);
    displayMessage(message);
  } catch (error) {
    displayMessage(`Error: ${error}`);
  }
}

function display(IMC: number, nome: string): string {
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
      return `Os valores: ${nome} ou ${IMC} não foram definido corretamente!`
  }
}

function displayMessage(message: string): void {
  const resultElement: HTMLElement = document.getElementById("result") as HTMLElement;

  resultElement.textContent = message;
}