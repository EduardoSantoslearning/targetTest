/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
*/


const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;
const total = sp + rj + mg + es + outros;

console.log('SP teve um percentual de representação de: '+((sp/total)*100).toFixed(2)+'%');
console.log('RJ teve um percentual de representação de: '+((rj/total)*100).toFixed(2)+'%');
console.log('MG teve um percentual de representação de: '+((mg/total)*100).toFixed(2)+'%');
console.log('ES teve um percentual de representação de: '+((es/total)*100).toFixed(2)+'%');
console.log('Outros estados tiveram um percentual de representação de: '+((outros/total)*100).toFixed(2)+'%');
