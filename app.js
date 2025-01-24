let nomeAmigos = [];

function adicionarAmigo(nome) {
    nome = document.getElementById('amigo').value;
    nomeAmigos.push(nome);
    console.log(nomeAmigos);
    limpaCampo();
    exibirTextoNaTela(nomeAmigos);
}

function exibirTextoNaTela(texto){
    let campo = document.getElementById('listaAmigos');
    campo.innerHTML = texto;
}

function limpaCampo() {
    campo = document.getElementById('amigo');
    campo.value = ' ';
}