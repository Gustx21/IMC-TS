function calculate(): void {
  const nome: string = "Gustavo";
  const altura: number = 1.80;
  const peso: number = 84;

  const IMC: number = (peso / (altura * 2));

  display(IMC, nome);
}

function display(IMC: number, nome: string): void {
  switch (true) {
    case IMC < 18.5:
      console.log(`${nome} você está abaixo do peso`);
      break;
    case IMC < 25:
      console.log(`${nome} você está com peso ideal.`);
      break;
    case IMC < 30:
      console.log(`${nome} você está levemente acima do peso`)
      break;
    case IMC < 35:
      console.log(`${nome} você está com obesidade grau I.`);
      break;
    case IMC < 40:
      console.log(`${nome} você está com obesidade grau II.`);
      break;
    case IMC < 50:
      console.log(`${nome} você está com obesidade grau III.`);
      break;
    default:
      break;
  }
}

calculate();