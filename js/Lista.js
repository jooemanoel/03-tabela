import { Item } from "./Item.js";

export class Lista {
    constructor(nomeDaLista) {
        this.itens = JSON.parse(localStorage.getItem(nomeDaLista)) || [];
        this.crescente = false;
        this.ordenar();
    }
    ordenar() {
        if (this.crescente) {
            this.itens = this.itens.sort((i1, i2) => i1.qt - i2.qt);
            this.crescente = false;
        }
        else {
            this.itens = this.itens.sort((i1, i2) => i2.qt - i1.qt);
            this.crescente = true;
        }
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