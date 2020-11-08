const nome = "Gabi";
const sobrenome = "Lima";
const idade = 19;
const peso = 57;
const altura = 1.5;
let imc = (peso / altura) * altura;
let anoNascimento = 2020 - 19;
console.log(
  `${nome} ${sobrenome} tem ${idade} anos , pesa ${peso} kg, tem de altura ${altura} e seu IMC é de ${imc}`
);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);
