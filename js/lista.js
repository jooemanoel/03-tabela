import { Item } from "./Item.js";

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