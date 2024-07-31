import { Item } from "./Item.js";

export class Lista {
    constructor(nomeDaLista) {
        this.itens = JSON.parse(localStorage.getItem(nomeDaLista)) || [];
        this.ordenar();
    }
    ordenar() {
        this.itens = this.itens.sort((i1, i2) => i2.qt - i1.qt);
    }
    salvar() {
        this.ordenar();
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