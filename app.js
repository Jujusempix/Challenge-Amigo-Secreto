let nomeAmigos = [];

function adicionarAmigo(nome) {
    nome = document.getElementById('amigo').value;
    if (nome == '') {
        alert('Por favor, insira um nome');
    } else {
        nomeAmigos.push(nome);
    }
    limpaCampo();
    exibirTextoNaTela(nome);
    console.log(nomeAmigos);
    console.log(nome);
}

function exibirTextoNaTela(texto){
    let campo = document.querySelector('ul').appendChild(document.createElement('li'));
    campo.innerHTML = texto;
}

function limpaCampo() {
    campo = document.getElementById('amigo');
    campo.value = '';
}