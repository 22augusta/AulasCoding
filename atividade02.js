const prompt = require('prompt-sync')(); 

// Introdução
console.log("Olá! Tudo bem?");
console.log("Me chamo Maria Augusta e estou testando minhas habilidades com esse mini programa em JS.");

// Função para perguntar com validação
function perguntaSimNao(pergunta) {
    let resposta;
    do {
        resposta = prompt(`${pergunta} (sim ou não) `).toLowerCase();
        if (resposta !== "sim" && resposta !== "não") {
            console.log("Resposta inválida! Por favor, responda com 'sim' ou 'não'.");
        }
    } while (resposta !== "sim" && resposta !== "não");
    return resposta;
}

// Função para validar número
function perguntarNumero(pergunta) {
    let num;
    do {
        num = parseFloat(prompt(pergunta));
        if (isNaN(num)) {
            console.log("Resposta inválida! Por favor, digite um número.");
        }
    } while (isNaN(num));
    return num;
}

// Pergunta se deseja continuar
let continuar = perguntaSimNao("Posso te fazer algumas perguntas para coletar informações sobre você?");

if (continuar === "sim") {
    // Programa 1: Nome e Idade
    let nome = prompt("Qual é o seu nome? ");
    let idade = perguntarNumero(`Quantos anos você tem, ${nome}? `);
    console.log(`Olá, ${nome}, você tem ${idade} anos? Parece mais jovem! :)`); 

    // Programa 2: Cidade
    let cidade;
    do {
        cidade = prompt("De qual cidade você é? ");
        if (!cidade) {
            console.log("Resposta inválida! Por favor, digite o nome da sua cidade.");
        }
    } while (!cidade); // Verifica se a cidade foi preenchida

    console.log(`UAU. ${nome}, ${cidade} é uma linda cidade!`); 

    // Programa 3: Operações Básicas
    console.log(`${nome}, sabia que eu sou MUITO boa em matemática?`);
    let matematica = perguntaSimNao("Você quer ver?");

    if (matematica === "sim") {
        let num1 = perguntarNumero("Digite um número: ");
        let num2 = perguntarNumero("Agora digite outro número: ");

        console.log(`Soma: ${num1 + num2}`);
        console.log(`Subtração: ${num1 - num2}`);
        console.log(`Multiplicação: ${num1 * num2}`);
        console.log(`Divisão: ${num1 / num2}`);

        console.log(`Viu só, ${nome}? Te falei que era boa em matemática. Essa foi fácil.`);

        let geometria = perguntaSimNao("Você pode fazer melhor que isso! Não é?");

        // Cálculo de Área
        if (geometria === "sim") {
            console.log(`Ótimo, ${nome}! Vamos calcular a área de um triângulo agora.`);
            console.log("A área é uma medida importante em geometria. Vamos lá!");

            let base = perguntarNumero("Digite a base do triângulo: ");
            let altura = perguntarNumero("Digite a altura do triângulo: ");
            console.log(`A área do triângulo é ${(base * altura) / 2}.`);

            // Introdução para o Cálculo de Média
            console.log(`Muito bem, ${nome}! Agora vamos ver como você se sai na média das suas notas.`);
            console.log("A média é uma maneira importante de entender seu desempenho. Vamos calcular a média de três notas!");

            // Cálculo de Média
            let nota1 = perguntarNumero("Digite a primeira nota: ");
            let nota2 = perguntarNumero("Digite a segunda nota: ");
            let nota3 = perguntarNumero("Digite a terceira nota: ");

            console.log(`O resultado da média é ${(nota1 + nota2 + nota3) / 3}.`);
        } else {
            console.log("Entendi! Talvez na próxima!");
        }

    } else {
        console.log("Entendi! Talvez na próxima!");
    }

    // Introdução para Desconto
    console.log(`Agora, ${nome}, vamos falar sobre economia! Você gostaria de calcular o desconto em um produto?`);
    let desconto = perguntaSimNao("Você quer calcular um desconto?");

    if (desconto === "sim") {
        let precoOriginal = perguntarNumero("Digite o preço original do produto: ");
        let percentualDesconto = perguntarNumero("Digite o percentual de desconto: ");
        let valorDesconto = (precoOriginal * percentualDesconto) / 100;
        console.log(`O valor final do produto com desconto é R$ ${(precoOriginal - valorDesconto).toFixed(2)}.`);
    } else {
        console.log("Tudo bem! Vamos para a próxima.");
    }

    // Introdução para Imposto de Renda
    console.log(`Em seguida, vamos falar sobre finanças, ${nome}.`);
    let impostoRenda = perguntaSimNao("Você gostaria de calcular o imposto de renda?");

    if (impostoRenda === "sim") {
        let salarioBruto = perguntarNumero("Digite o seu salário bruto: ");
        let aliquota = 0.15; // 15%
        console.log(`O imposto de renda a ser pago é R$ ${(salarioBruto * aliquota).toFixed(2)}.`);
    } else {
        console.log("Tudo bem! Vamos para a próxima.");
    }

    // Introdução para Conversor de Moedas
    console.log(`Agora, ${nome}, vamos falar sobre câmbio. Você quer converter um valor de reais para outra moeda?`);
    let conversorMoeda = perguntaSimNao("Você gostaria de fazer uma conversão de moeda?");

    if (conversorMoeda === "sim") {
        let valorEmReais = perguntarNumero("Digite o valor em reais: ");
        let taxaCambio = perguntarNumero("Digite a taxa de câmbio para a moeda desejada: ");
        console.log(`O valor convertido é ${(valorEmReais * taxaCambio).toFixed(2)} na moeda desejada.`);
    } else {
        console.log("Tudo bem! Vamos para a próxima.");
    }

    // Introdução para Conversão de Temperatura
    console.log(`Agora, vamos fazer uma conversão de temperatura, ${nome}.`);
    let conversaoTemperatura = perguntaSimNao("Você gostaria de converter uma temperatura de Celsius para Fahrenheit?");

    if (conversaoTemperatura === "sim") {
        let celsius = perguntarNumero("Digite a temperatura em Celsius: ");
        console.log(`A temperatura em Fahrenheit é ${((celsius * 9 / 5) + 32).toFixed(2)}.`);
    } else {
        console.log("Tudo bem! Vamos para a próxima.");
    }

    // Introdução para IMC
    console.log(`Por último, eu gostaria de calcular o seu IMC, ${nome}.`);
    let calcularIMC = perguntaSimNao("Podemos calcular o seu IMC?");

    if (calcularIMC === "sim") {
        let peso = perguntarNumero("Digite seu peso em kg: ");
        let alturaIMC = perguntarNumero("Digite sua altura em metros: ");
        console.log(`Seu IMC é ${(peso / (alturaIMC * alturaIMC)).toFixed(2)}.`);
    } else {
        console.log("Tudo bem! Espero que tenha se divertido com as interações.");
    }

} else {
    console.log("Obrigado! Espero que tenhamos a chance de conversar novamente. Até a próxima!");
}
