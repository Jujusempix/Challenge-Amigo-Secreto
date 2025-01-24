let nomeAmigos = [];

function adicionarAmigo(nome) {
    nome = document.getElementById('amigo').value;
    if (nome == ' ') {
        alert('Por favor, insira um nome');
        limpaCampo();
    } else {
        nomeAmigos.push(nome);
    }
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