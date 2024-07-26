import { Lista } from "./lista.js";

let lista = new Lista('itens');

function adicionar(){
    lista.novoItem();
}

function criaElementosIniciais() {
    const botaoNovo = document.querySelector('#novo');
    const botaoApagar = document.querySelector('#apagar');
    botaoNovo.onclick = adicionar;
    botaoApagar.onclick = lista.apagar;
    renderizarTabela();
}

function renderizarTabela() {
    const tabelaItens = document.querySelector('.tabela');
    let htmlTabela = `<tr><th>Produto</th><th>Quantidade</th><th>Medida</th></tr>`;
    for (const item of lista.itens) {
        htmlTabela += `<tr><td>${item.id}</td><td id="${item.id}">${item.qt}</td><td>${item.md}</td></tr>`;
    }
    tabelaItens.innerHTML = htmlTabela;
}

document.addEventListener("click", function (event) {
    for (let i = 0; i < lista.itens.length; i++) {
        if (lista.itens[i].id == event.target.id) {
            lista.itens[i].qt++;
            event.target.textContent = lista.itens[i].qt;
            localStorage.setItem('itens', JSON.stringify(lista.itens));
            return;
        }
    }
});

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    for (let i = 0; i < lista.itens.length; i++) {
        if (lista.itens[i].id == event.target.id) {
            if(lista.itens[i].qt == 0)
                return;
            lista.itens[i].qt--;
            event.target.textContent = lista.itens[i].qt;
            localStorage.setItem('itens', JSON.stringify(lista.itens));
            return;
        }
    }
});

window.onload = function () {
    criaElementosIniciais();
}
