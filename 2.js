/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/


function comparaValorFibonacci(numeroAlvo){

    const fibonacci = [0, 1];
    let contem = false;

    for (let i = 2; i < numeroAlvo; i++) {
        const proxNumero = fibonacci[i-2] + fibonacci[i-1];
        fibonacci.push(proxNumero)

        if(fibonacci[i]==numeroAlvo){
            contem = true;        
        }

        if (fibonacci[i]>=numeroAlvo) {
            break;
        }
    }

    if (contem === true) {
        console.log('O número '+ numeroAlvo + ' pertence a sequencia de Fibonacci');
    }else{
        console.log('O número '+ numeroAlvo + ' não pertence a sequencia de Fibonacci');
    }
}

comparaValorFibonacci(144)