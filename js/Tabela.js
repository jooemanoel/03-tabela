export class Tabela {
    constructor(elementoPai, lista) {
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
        this.mostrar();
        // Adiciona os botões de clique
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

    mostrar() {
        this.elementoPai.appendChild(this.elementoTabela);
    }
    ocultar() {
        this.elementoPai.removeChild(this.elementoTabela);
    }
}