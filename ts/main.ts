import { Lista } from "./Lista.js";
import { Form } from "./Form.js";
import { Tabela } from "./Tabela.js";

const elementoMain: HTMLElement = document.querySelector('main') as HTMLElement;
const lista: Lista = new Lista('itens');
const tabela: Tabela = new Tabela(elementoMain, lista);
const form: Form = new Form(elementoMain, lista);
let elementoAtivo: any = tabela;

const botaoNovo = document.querySelector('#novo') as HTMLButtonElement;
botaoNovo.onclick = function () {
    elementoAtivo.ocultar();
    elementoAtivo = form;
    form.exibir();
}

const botaoVer = document.querySelector('#ver') as HTMLButtonElement;
botaoVer.onclick = function () {
    elementoAtivo.ocultar();
    elementoAtivo = tabela;
    tabela.exibir();
}

const botaoApagar = document.querySelector('#apagar') as HTMLButtonElement;
botaoApagar.onclick = function () {
    lista.apagar();
}

const botaoQt = document.querySelector('#qt') as HTMLButtonElement;
botaoQt.onclick = function () {
    lista.ordenar();
    tabela.preencher();
}