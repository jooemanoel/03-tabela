export class Component{
    elemento: HTMLElement;
    elementoPai: HTMLElement;
    ativo: boolean;
    constructor(elementoPai: HTMLElement, tag: string){
        this.elemento = document.createElement(tag);
        this.elementoPai = elementoPai;
        this.elementoPai.appendChild(this.elemento);
        this.elemento.classList.add('hidden');
        this.ativo = false;
    }
    exibir(){
        this.elemento.classList.remove('hidden');
    }
    ocultar(){
        this.elemento.classList.add('hidden');
    }
}