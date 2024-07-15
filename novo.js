let textoTitulo = document.createElement('h1');
let textoVoltar = document.createElement('h2');
let textoLabel1 = document.createElement('label');
let textoInput1 = document.createElement('input');
let textoLabel2 = document.createElement('label');
let textoInput2 = document.createElement('input');
let textoLabel3 = document.createElement('label');
let textoInput3 = document.createElement('input');
let textoConfirmar = document.createElement('h2');

let listaItens = JSON.parse(localStorage.getItem('listaItens')) || [];

function criaElementosIniciais() {
    textoTitulo.textContent = 'Adicionar Novo Item';
    document.body.appendChild(textoTitulo);
    textoVoltar.innerHTML = '<a href="index.html">Voltar</a>';
    document.body.appendChild(textoVoltar);

    textoLabel1.textContent = 'Produto: ';
    textoInput1.type = 'text';
    textoInput1.name = 'produto';
    document.body.appendChild(textoLabel1);
    document.body.appendChild(textoInput1);
    
    textoLabel2.textContent = 'Quantidade: ';
    textoInput2.type = 'number';
    textoInput2.name = 'qt';
    document.body.appendChild(textoLabel2);
    document.body.appendChild(textoInput2);
    
    textoLabel3.textContent = 'Medida: ';
    textoInput3.type = 'text';
    textoInput3.name = 'medida';
    document.body.appendChild(textoLabel3);
    document.body.appendChild(textoInput3);

    textoConfirmar.textContent = 'Confirmar';
    textoConfirmar.style.cursor = 'pointer';
    textoConfirmar.onclick = salvaRegistro;
    document.body.appendChild(textoConfirmar);
}

function salvaRegistro(){
    let item = { id: textoInput1.value, qt: textoInput2.value, medida: textoInput3.value };
    salvaItem(item);
    alert(item.id + ' adicionado com sucesso!');
}

function salvaItem(item) {
    listaItens.push(item);
    localStorage.setItem('listaItens', JSON.stringify(listaItens));
}

window.onload = function () {
    criaElementosIniciais();
}
