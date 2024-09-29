export function calculate(name: string, heigth: number, weight: number): string {
  try {
    if (!name || heigth <= 0.40 || weight <= 10) {
      throw new Error("Nome, Altura ou Peso inválido!");
    }

    const IMC: number = (weight / (heigth * 2));
  
    return display(IMC, name);
  } catch (error) {
    return `Error: ${error}`;
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