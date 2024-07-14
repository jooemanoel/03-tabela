let textoTitulo = document.createElement('h1');
let textoVoltar = document.createElement('h2');
let tabelaItens = document.createElement('table');

let itemBasico = { id: "Arroz", qt: 0, medida: "kg" };
let itemBasico2 = { id: "Feijao", qt: 0, medida: "kg" };
let listaItens = JSON.parse(localStorage.getItem('listaItens')) || [];
if (listaItens === null) {
    listaItens = [];
    salvaItem(itemBasico);
    salvaItem(itemBasico2);
}

function criaElementosIniciais() {
    textoTitulo.textContent = 'Tabela de Produtos em Estoque';
    document.body.appendChild(textoTitulo);
    textoVoltar.innerHTML = '<a href="index.html">Voltar</a>';
    document.body.appendChild(textoVoltar);
}

function criaTabelaItens() {
    let itemPai = { id: "Produto", qt: "Quantidade", medida: "Medida" };
    adicionaItem(itemPai, "th");
    for (let i = 0; i < listaItens.length; i++) {
        adicionaItem(listaItens[i], "td");
    }
    document.body.appendChild(tabelaItens);
}

function adicionaItem(item, tag) {
    const linha = document.createElement('tr');
    adicionaCelula(item.id, tag, linha);
    adicionaCelula(item.qt, tag, linha);
    adicionaCelula(item.medida, tag, linha);
    tabelaItens.appendChild(linha);
}

function adicionaCelula(texto, tag, linha) {
    const celula1 = document.createElement(tag);
    celula1.textContent = texto;
    linha.appendChild(celula1);
}

function salvaItem(item) {
    listaItens.push(item);
    localStorage.setItem('listaItens', JSON.stringify(listaItens));
}

window.onload = function () {
    criaElementosIniciais();
    criaTabelaItens();
}
