let textoTitulo = document.createElement('h1');
let textoNovo = document.createElement('h2');
let tabelaItens = document.createElement('table');
let textoApagar = document.createElement('h2');

let listaItens = JSON.parse(localStorage.getItem('listaItens')) || [];

function criaElementosIniciais() {
    textoTitulo.textContent = 'Tabela de Produtos em Estoque';
    document.body.appendChild(textoTitulo);
    textoNovo.innerHTML = 'Adicionar Novo Item';
    textoNovo.onclick = novoItem;
    document.body.appendChild(textoNovo);
    criaTabelaItens();
    textoApagar.textContent = 'Apagar Tudo';
    textoApagar.onclick = apagarLista;
    document.body.appendChild(textoApagar);
    
}

function criaTabelaItens() {
    let itemPai = { id: "Produto", qt: "Quantidade", md: "Medida" };
    adicionaItem(itemPai, "th");
    for (let i = 0; i < listaItens.length; i++) {
        adicionaItem(listaItens[i], "td");
    }
    document.body.appendChild(tabelaItens);
}

function adicionaItem(item, tag) {
    const linha = document.createElement('tr');
    adicionaCelula(item.id, tag, linha);
    adicionaCelulaQt(item.qt, tag, linha, item.id);
    adicionaCelula(item.md, tag, linha);
    tabelaItens.appendChild(linha);
}

function adicionaCelula(texto, tag, linha) {
    const celula1 = document.createElement(tag);
    celula1.textContent = texto;
    linha.appendChild(celula1);
}

function adicionaCelulaQt(texto, tag, linha, id) {
    const celula1 = document.createElement(tag);
    celula1.textContent = texto;
    celula1.id = id;
    linha.appendChild(celula1);
}

function novoItem(){
    let item = {id: "", qt: 0, md: ""};
    item.id = prompt('Nome do item: ');
    item.md = prompt('Unidade de Medida: ');
    salvaItem(item);
    location.reload();
}

function salvaItem(item) {
    listaItens.push(item);
    localStorage.setItem('listaItens', JSON.stringify(listaItens));
}

function apagarLista(){
    listaItens = [];
    localStorage.setItem('listaItens', JSON.stringify(listaItens));
    location.reload();
}

document.addEventListener("click", function (event) {
    for (let i = 0; i < listaItens.length; i++) {
        if (listaItens[i].id == event.target.id) {
            listaItens[i].qt++;
            event.target.textContent = listaItens[i].qt;
            localStorage.setItem('listaItens', JSON.stringify(listaItens));
            return;
        }
    }
});

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    for (let i = 0; i < listaItens.length; i++) {
        if (listaItens[i].id == event.target.id) {
            if(listaItens[i].qt == 0)
                return;
            listaItens[i].qt--;
            event.target.textContent = listaItens[i].qt;
            localStorage.setItem('listaItens', JSON.stringify(listaItens));
            return;
        }
    }
});

window.onload = function () {
    criaElementosIniciais();
}
