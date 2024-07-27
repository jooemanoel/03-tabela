export class Item{
    constructor(id, qt, md){
        this.id = id;
        this.qt = qt;
        this.md = md;
    }
}

export class Lista{
    constructor(nomeDaLista){
        this.itens = JSON.parse(localStorage.getItem(nomeDaLista)) || [];
    }
    salvar(){
        localStorage.setItem('itens', JSON.stringify(this.itens));
    }
    novoItem(id, md){
        this.itens.push(new Item(id, 0, md));
        this.salvar();
    }
    apagar(){
        const confirma = prompt('Digite "Apagar" para confirmar:');
        if(confirma != 'Apagar')
            return;
        this.itens = [];
        this.salvar();
        location.reload();
    }
}

export class Tabela{
    constructor(elementoPai, lista){
        // Cria o elemento Tabela
        this.elementoTabela = document.createElement('table');
        this.elementoTabela.classList.add('tabela');
        this.elementoPai = elementoPai;
        // Preenche os dados na Tabela de acordo com a Lista
        let htmlTabela = `<tr><th>Produto</th><th>Quantidade</th><th>Medida</th></tr>`;
        for (const item of lista.itens) {
            htmlTabela += `<tr><td>${item.id}</td><td id="${item.id}">${item.qt}</td><td>${item.md}</td></tr>`;
        }
        this.elementoTabela.innerHTML = htmlTabela;
        // Renderiza a Tabela no elemento Pai
        this.elementoPai.appendChild(this.elementoTabela);
        // Adiciona os botões de clique
        for (const item of lista.itens){
            const elementoQt = document.querySelector(`#${item.id}`);
            elementoQt.addEventListener('click', function(){
                item.qt++;
                elementoQt.textContent = item.qt;
                lista.salvar();
            });
            elementoQt.addEventListener('contextmenu', function(event){
                event.preventDefault();
                if(item.qt == 0)
                    return;
                item.qt--;
                elementoQt.textContent = item.qt;
                lista.salvar();
            });
        }
    }

    mostrar(){
        this.elementoPai.appendChild(this.elementoTabela);
    }
    ocultar(){
        this.elementoPai.removeChild(this.elementoTabela);
    }
}

export class Form {
    constructor(elementoPai, lista) {
        this.elementoForm = document.createElement('form');
        this.elementoForm.classList.add('formulario');
        this.elementoPai = elementoPai;
        this.elementoForm.innerHTML = `
            <h1 class="formulario__item">Novo Produto</h1>
            <label class="formulario__item" for="id">Produto:</label>
            <input class="formulario__item input" type="text" id="id"></input>
            <label class="formulario__item" for="md">Medida:</label>
            <input class="formulario__item input" type="text" id="md"></input>
            <input class="formulario__item submit" type="submit" name="sub"></input>
        `;
        this.elementoForm.onsubmit = function (event) {
            const elementos = document.querySelectorAll('.input');
            const id = elementos[0].value;
            const md = elementos[1].value;
            console.log(elementos[0].value);
            console.log(elementos[1].value);
            if (id === null || id === '')
                return;
            if (md === '' || md === null)
                md = 'un';
            for (const item of lista.itens) {
                if (id === item.id)
                    return;
            }
            lista.novoItem(id, md);
        }
    }
    mostrar() {
        this.elementoPai.appendChild(this.elementoForm);
    }
    ocultar() {
        this.elementoPai.removeChild(this.elementoForm);
    }
}

const elementoMain = document.querySelector('main');
let lista = new Lista('itens');
const tabela = new Tabela(elementoMain, lista);
const form = new Form(elementoMain, lista);

const botaoNovo = document.querySelector('#novo');
botaoNovo.onclick = function(){
    tabela.ocultar();
    form.mostrar();
}

const botaoVer = document.querySelector('#ver');
botaoVer.onclick = function(){
    form.ocultar();
    tabela.mostrar();
}

const botaoApagar = document.querySelector('#apagar');
botaoApagar.onclick = function(){
    lista.apagar();
}
