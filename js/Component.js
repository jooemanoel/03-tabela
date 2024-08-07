export class Component {
    elemento;
    elementoPai;
    ativo;
    constructor(elementoPai, tag) {
        this.elemento = document.createElement(tag);
        this.elementoPai = elementoPai;
        this.elementoPai.appendChild(this.elemento);
        this.elemento.classList.add('hidden');
        this.ativo = false;
    }
    exibir() {
        this.elemento.classList.remove('hidden');
    }
    ocultar() {
        this.elemento.classList.add('hidden');
    }
}
