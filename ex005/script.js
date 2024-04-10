// pedir uma nota de 0 a 10;
// mostar mensagem caso o valor seja e invalido;
// repetir o processo até que um valor valido seja inserido.

let nota = parseInt(prompt("Digite uma nota de 0 a 10"));

while(nota > 10 || nota < 1 || isNaN(nota)){
    alert("Nota invalida!");
    
    nota = parseInt(prompt("Digite uma nota de 0 a 10"));
}

alert("Nota válida");




