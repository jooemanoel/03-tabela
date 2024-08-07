import { Component } from "./Component.js";
import { Lista } from "./Lista.js";

export class Form extends Component {
    constructor(elementoPai: HTMLElement, lista: Lista) {
        super(elementoPai, 'form');
        this.elemento.classList.add('formulario');
        this.elemento.innerHTML = `
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
        this.elemento.onsubmit = function (event) {
            const elementos = document.querySelectorAll('.input');
            const id = (elementos[0] as HTMLInputElement).value;
            const md = (elementos[1] as HTMLInputElement).value;
            for (const item of lista.itens) {
                if (id === item.id)
                    return;
            }
            lista.novoItem(id, md);
        }
    }
}