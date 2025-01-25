//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function adicionarAmigo(){
    let amigo = document.querySelector('input').value;

    if(amigo === ''){
        alert('Digite um nome para adicionar um amigo');
        return;
    }

    let lista = document.querySelector('ul');
    let resultado = document.createElement('ul');
    resultado.textContent = amigo;
    lista.appendChild(resultado);
    limparCampo();

    //console.log('adiconando amigo...');
}


function sortearAmigo(){
    let lista = document.querySelectorAll('ul');
    let sorteado = Math.floor(Math.random() * lista.length);
    let amigoSorteado = lista[sorteado];
    let resultado = document.querySelector('#resultado');
    resultado.textContent = amigoSorteado.textContent;

    //console.log('Sorteando amigo...');
}

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
    //console.log('Limpando campo...');
}


    