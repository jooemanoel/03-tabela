export class Form {
    constructor(elementoPai, lista) {
        this.elementoForm = document.createElement('form');
        this.elementoForm.classList.add('formulario');
        this.elementoPai = elementoPai;
        this.elementoForm.innerHTML = `
            <h1 class="formulario__item">Novo Produto</h1>
            <label class="formulario__item" for="id">Produto:</label>
            <input class="formulario__item input" type="text" id="id" required></input>
            <label class="formulario__item" for="md">Medida:</label>
            <select class="formulario__item input" id="md" name="md" required>
                <option value="un">un</option>
                <option value="kg">kg</option>
                <option value="cx">cx</option>
                <option value="lt">lt</option>
                <option value="pct">pct</option>
            </select>
            <input class="formulario__item submit" type="submit" name="sub"></input>
        `;
        this.elementoForm.onsubmit = function (event) {
            const elementos = document.querySelectorAll('.input');
            const id = elementos[0].value;
            const md = elementos[1].value;
            console.log(elementos[0].value);
            console.log(elementos[1].value);
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