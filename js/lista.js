import { Item } from "./Item.js";

export class Lista{
    constructor(nomeDaLista){
        this.itens = JSON.parse(localStorage.getItem(nomeDaLista)) || [];
    }
    novoItem(){
        let id = prompt('Nome do item: ');
        if(id === null || id === '')
            return;
        let md = prompt('Unidade de Medida: ');
        if(md === '' || md === null)
            md = 'un';
        for (const item of this.itens) {
            if(id === item.id)
                return;
        }
        this.itens.push(new Item(id, 0, md));
        localStorage.setItem('itens', JSON.stringify(this.itens));
    }
    apagar(){
        const confirma = prompt('Digite "Apagar" para confirmar:');
        if(confirma != 'Apagar')
            return;
        this.itens = [];
        localStorage.setItem('itens', JSON.stringify(this.itens));
        location.reload();
    }
}