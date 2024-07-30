import { Lista } from "./Lista.js";
import { Form } from "./Form.js";
import { Tabela } from "./Tabela.js";

const elementoMain = document.querySelector('main');
const lista = new Lista('itens');
const tabela = new Tabela(elementoMain, lista);
const form = new Form(elementoMain, lista);
let elementoAtivo = tabela;

const botaoNovo = document.querySelector('#novo');
botaoNovo.onclick = function () {
    elementoAtivo.ocultar();
    elementoAtivo = form;
    form.mostrar();
}

const botaoVer = document.querySelector('#ver');
botaoVer.onclick = function () {
    elementoAtivo.ocultar();
    elementoAtivo = tabela;
    tabela.mostrar();
}

const botaoApagar = document.querySelector('#apagar');
botaoApagar.onclick = function () {
    lista.apagar();
}