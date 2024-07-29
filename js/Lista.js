import { Item } from "./Item.js";

export class Lista {
    constructor(nomeDaLista) {
        this.itens = JSON.parse(localStorage.getItem(nomeDaLista)) || [];
    }
    salvar() {
        localStorage.setItem('itens', JSON.stringify(this.itens));
    }
    novoItem(id, md) {
        this.itens.push(new Item(id, 0, md));
        this.salvar();
    }
    apagar() {
        if (window.confirm('Tem certeza?')) {
            this.itens = [];
            this.salvar();
            location.reload();
        }
    }
}