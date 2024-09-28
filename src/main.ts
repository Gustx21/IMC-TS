function calculate(): void {
  //const nome: string = "Gustavo";
  const altura: number = 1.72;
  const peso: number = 70;

  const IMC: number = (peso / (altura * 2));

  display(IMC);
}

function display(IMC: number): void {
  switch (true) {
    case IMC < 18.5:
      console.log("abaixo do peso");
      break;
    case IMC < 25:
      console.log("com peso ideal.");
      break;
    case IMC < 30:
      console.log("levemente acima do peso")
      break;
    case IMC < 35:
      console.log("com obesidade grau I.");
      break;
    case IMC < 40:
      console.log("com obesidade grau II.");
      break;
    case IMC < 50:
      console.log("com obesidade grau III.");
      break;
    default:
      break;
  }
}


calculate();