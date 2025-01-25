let listaAmigos = [];

function adicionarAmigo(nome) {
    nome = document.getElementById('amigo').value;
    if (nome == '') {
        alert('Por favor, insira um nome');
    } else {
        listaAmigos.push(nome);
    }
    limpaCampo();
    exibirTextoNaTela(nome);
    console.log(listaAmigos);
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

function limpaAmigos() {
    campo = document.getElementById('listaAmigos');
    campo.innerHTML = ''
}

function sortearAmigo() {
    let sorteio =  parseInt(Math.random() * listaAmigos.length + 1);
    limpaAmigos()
    exibirTextoNaTela(sorteio)
}