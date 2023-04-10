/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function inverteString(palavra) {
    var novaPlavra = "";
    for (var i = palavra.length - 1; i >= 0; i--) {
        novaPlavra += palavra[i];
    }
    return novaPlavra;
}

inverteString('Eduardo');
