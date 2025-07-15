(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    interface IHtmlElement{
        id  : string;
        type: HtmlType;
    }

    class HtmlElement {
        public id  : string;
        public type: HtmlType;
        constructor({id, type} : IHtmlElement) {
            this.id   = id;
            this.type = type;
        }
    }

    interface IInputAttributes{
        placeholder : string,            
        value       : string,
    }

    class InputAttributes{

        public placeholder: string;
        public value      : string;

        constructor({ value, placeholder}:IInputAttributes) {
            this.placeholder = placeholder;
            this.value = value;
        }
    }

    class InputEvents{
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }   
    
    interface IInputElement{
        id  : string;
        placeholder : string,            
        value       : string,
    }

    class InputElement{
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;
        constructor({
            id,
            value, placeholder,
        }: IInputElement){
            this.htmlElement = new HtmlElement({id, type: 'input'});
            this.inputAttributes = new InputAttributes({value, placeholder});
            this.inputEvents = new InputEvents();
        }
    }

    //? Idea para la nueva clase InputElement

    const nameField = new InputElement({
        id: 'txtName',
        placeholder: 'Enter first name',
        value: 'Fernando'
    });

    console.log({ nameField });

})()