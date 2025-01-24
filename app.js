let nomeAmigos = [];

function adicionarAmigo(nome) {
    nome = document.getElementById('amigo').value;
    nomeAmigos.push(nome);
    exibirTextoNaTela(nome)
}

function exibirTextoNaTela(texto){
    let campo = document.getElementById('listaAmigos');
    campo.innerHTML = texto;
}

console.log(nomeAmigos);
