let listaAmigos = [];

function adicionarAmigo(nome) {
    nome = document.getElementById('amigo').value;
    if (nome == '') {
        alert('Por favor, insira um nome');
    } else {
        listaAmigos.push(nome);
        limpaTudo('resultado');
    }
    limpaTudo('amigo');
    exibirTextoEmUl('listaAmigos', nome);
}

function exibirTextoEmUl(tag, texto){
    let campo = document.getElementById(tag).appendChild(document.createElement('li'));
    campo.innerHTML = texto;
}

function limpaTudo(tag) {
    campo = document.getElementById(tag);
    campo.innerHTML = '';
    campo.value = '';
}

function sortearAmigo() {
    let sorteio =  parseInt(Math.random() * listaAmigos.length);
    
    if(listaAmigos[sorteio] == undefined){
        limpaTudo('resultado');
        alert('Não há nomes para sortear, por favor, insira novos nomes');
    } else {
        limpaTudo('listaAmigos');
        exibirTextoEmUl('resultado', `O nome sorteado foi: ${listaAmigos[sorteio]}`);
        listaAmigos.length = 0
    }
}