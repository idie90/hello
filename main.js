
let nomeUsuário = '';
let elemento = document.querySelector('#nome-usuário');

while (nomeUsuário == '') {
   nomeUsuário = prompt("what's your name?");
}

if ( nomeUsuário == null){
    elemento.textContent = "seja bem-vindo(a)";
}
else{
    elemento.textContent = nomeUsuário;
}