// 1. Apresentação de Nome e Idade
let nome = "Maria Augusta"; 
let idade = 22; 
console.log('Olá, meu nome é ${nome} e tenho ${idade} anos.');
// 2. Nome e Cidade
let cidade = "Recife";
console.log(`${nome} é de ${cidade}.`);

// Entradas
let n1 = parseFloat(prompt('Digite o primeiro número: '));
let n2 = parseFloat(prompt('Digite o segundo número: '));
// Operações
const soma = n1 + n2;
const sub = n1 - n2
const mult = n1 * n2;
const div = n1 / n2;
console.log('Os números digitados foram ${n1} e ${n2}');
console.log('A soma dos números é ${soma}');
console.log('A subtração dos números é ${sub');
console.log('A multiplicação dos números é ${mult}');
console.log('A divisão dos números é ${div}');
// CALCULAR A AREA DO TRIANGULO
let base = parseInt(prompt('Digite o valor da base do triângulo: '));
let altura = parseInt(prompt('Digite o valor da altura do triângulo: '))
const area = ((base * altura) / 2).toFixed(2);
console.log('Aarea do triangulo é ${area}');