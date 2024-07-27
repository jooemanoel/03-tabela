import { Lista } from "./Lista.js";
import { Form } from "./Form.js";
import { Tabela } from "./Tabela.js";

const elementoMain = document.querySelector('main');
let lista = new Lista('itens');
const tabela = new Tabela(elementoMain, lista);
const form = new Form(elementoMain, lista);

const botaoNovo = document.querySelector('#novo');
botaoNovo.onclick = function(){
    tabela.ocultar();
    form.mostrar();
}

const botaoVer = document.querySelector('#ver');
botaoVer.onclick = function(){
    form.ocultar();
    tabela.mostrar();
}

const botaoApagar = document.querySelector('#apagar');
botaoApagar.onclick = function(){
    lista.apagar();
}