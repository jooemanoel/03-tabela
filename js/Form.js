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