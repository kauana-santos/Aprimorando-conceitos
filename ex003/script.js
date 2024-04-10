/*
ler nome de usuário e senha;
não aceitar nome e senha iguais;
mostrar mensagem de erro;
pedir informações de novo;


    while (){
        alert('Usuário ou senha inválidos!')
       
        
    }

*/

let form = document.getElementById('formulario');
let nome = document.getElementById('nome');
let senha = document.getElementById('senha');

form.addEventListener('submit', function(e) {
    alert(nome.value)
    

})

