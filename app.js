let textoTitulo = document.createElement('h1');
let textoNovo = document.createElement('h2');
let tabelaItens = document.createElement('table');

let listaItens = JSON.parse(localStorage.getItem('listaItens')) || [];

function criaElementosIniciais() {
    textoTitulo.textContent = 'Tabela de Produtos em Estoque';
    document.body.appendChild(textoTitulo);
    textoNovo.innerHTML = '<a href="novo.html">Adicionar Novo Item</a>';
    document.body.appendChild(textoNovo);
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
    adicionaCelulaQt(item.qt, tag, linha, item.id);
    adicionaCelula(item.medida, tag, linha);
    tabelaItens.appendChild(linha);
}

function adicionaCelula(texto, tag, linha) {
    const celula1 = document.createElement(tag);
    celula1.textContent = texto;
    linha.appendChild(celula1);
}

function adicionaCelulaQt(texto, tag, linha, id){
    const celula1 = document.createElement(tag);
    celula1.textContent = texto;
    celula1.id = id;
    linha.appendChild(celula1);
}

function salvaItem(item) {
    listaItens.push(item);
    localStorage.setItem('listaItens', JSON.stringify(listaItens));
}

document.addEventListener("click", function(event){
    let conteudo = event.target.textContent;
    if (isNaN(conteudo)==false){
        let aux = parseInt(conteudo) + 1;
        event.target.textContent = aux;
        for (let i = 0; i < listaItens.length; i++) {
            if(listaItens[i].id == event.target.id){
                listaItens[i].qt = aux;
                localStorage.setItem('listaItens', JSON.stringify(listaItens));
                return;
            }
        }
    }
});

document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    let conteudo = event.target.textContent;
    if (isNaN(conteudo)==false){
        let aux = parseInt(conteudo) - 1;
        event.target.textContent = aux;
        for (let i = 0; i < listaItens.length; i++) {
            if(listaItens[i].id == event.target.id){
                listaItens[i].qt = aux;
                localStorage.setItem('listaItens', JSON.stringify(listaItens));
                return;
            }
        }
    }
});

window.onload = function () {
    criaElementosIniciais();
    criaTabelaItens();
}
