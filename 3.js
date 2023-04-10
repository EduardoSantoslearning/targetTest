/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/


/*
sortear valores dos faturamentos do mês de fevereiro para criação do arquivo json:


const faturamento = [];
for (let i = 0; i <= 27; i++) {
    let faturamentoDia = Math.random() * (30000 - 10000) + 10000;

    if (i % 7 == 1 || i % 7 == 0) {
        faturamentoDia = 0;
    }

    faturamento.push(faturamentoDia.toFixed(0));

}
console.log(faturamento);


resultado do sorteio:
[
  '0',     '0',     '13147', '15343',
  '16879', '22029', '22625', '0',
  '0',     '25375', '17149', '15716',
  '17877', '14479', '0',     '0',
  '18912', '13576', '16916', '22038',
  '23746', '0',     '0',     '10993',
  '21964', '20586', '10512', '22884'
]
const faturamentoDiario=[];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/


const fs = require('fs');

fs.readFile('3.json', 'utf-8', (err, data) => {
    if (err) throw err;

    const json = JSON.parse(data);
    const faturamento = json.faturamento;

    //aqui termina a leitura do arquivo

    const faturamentoMes = [];
    let mediaMensal = null;

    for (let i = 0; i < faturamento.length; i++) {
        const valor = faturamento[i].valor;
        if (valor != 0) {
            faturamentoMes.push(valor);
            mediaMensal += valor;
        }
    };

    //aqui termina a criação de um novo array ignorando valores nulos

    let maiorValorMes = null;
    let menorValorMes = faturamentoMes[0];
    let diasComFaturamentoAcima = 0;
    mediaMensal = mediaMensal / faturamentoMes.length;

    for (let i = 0; i < faturamentoMes.length; i++) {
        if (mediaMensal < faturamentoMes[i]) {
            diasComFaturamentoAcima++;
        }
        if (faturamentoMes[i] < menorValorMes) {
            menorValorMes = faturamentoMes[i];
        }
        if (faturamentoMes[i] > maiorValorMes) {
            maiorValorMes = faturamentoMes[i];
        }
    };

    //aqui termina de definir os valores a serem mostrados

    console.log('O menor valor de faturamento ocorrido no mês é de: ' + menorValorMes.toFixed(2));
    console.log('O maior valor de faturamento ocorrido no mês é de: ' + maiorValorMes.toFixed(2));
    console.log('Números de dias no mês com faturamento superior a média: ' + diasComFaturamentoAcima);
});