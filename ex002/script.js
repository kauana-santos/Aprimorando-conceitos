function media(){
    let nota1 = parseInt(prompt('digite a nota 1'));
    let nota2 = parseInt(prompt('digite a nota 2'));

    let media = (nota1 + nota2) / 2;

    

    if (media >= 7 && media <= 10){
        alert('A média do aluno é ' + media + '. Aluno aprovado!');
    } else if (media <7 && media >0){
        alert('A média do aluno é' + media + '. Aluno reprovado!');
    }

}