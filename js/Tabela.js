export class Tabela {
    constructor(elementoPai, lista) {
        // Cria o elemento Tabela
        this.elementoTabela = document.createElement('table');
        this.elementoTabela.classList.add('tabela');
        this.elementoPai = elementoPai;
        this.lista = lista;
        // Preenche os dados da tabela
        this.preencherTabela();
        // Renderiza a tabela no elemento Pai
        this.mostrar();
        // Adiciona os botões demudança de quantidade
        for (const item of lista.itens) {
            const elementoQt = document.querySelector(`#${item.id}`);
            elementoQt.addEventListener('click', function () {
                item.qt++;
                elementoQt.textContent = item.qt;
                lista.salvar();
            });
            elementoQt.addEventListener('contextmenu', function (event) {
                event.preventDefault();
                if (item.qt == 0)
                    return;
                item.qt--;
                elementoQt.textContent = item.qt;
                lista.salvar();
            });
        }
    }
    preencherTabela() {
        // Preenche o cabeçalho da Tabela
        let htmlTabela = `<tr><th id="id">Produto</th><th id="qt">Quantidade</th><th id="md">Medida</th></tr>`;
        // Preenche os dados na Tabela de acordo com a Lista
        for (const item of this.lista.itens) {
            htmlTabela += `<tr><td>${item.id}</td><td id="${item.id}">${item.qt}</td><td>${item.md}</td></tr>`;
        }
        this.elementoTabela.innerHTML = htmlTabela;
    }
    mostrar() {
        this.elementoPai.appendChild(this.elementoTabela);
    }
    ocultar() {
        this.elementoPai.removeChild(this.elementoTabela);
    }
}