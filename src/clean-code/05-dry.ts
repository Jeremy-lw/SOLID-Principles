type typeSize = ''|'S'|'M'|'L'|'XL';

class Product {
    constructor(
        public name: String = '',
        public price: number = 0,
        public size: typeSize = '',
    ){}    

    isProductReady() : boolean{
        for(const key in this){            
            switch( typeof this[key]){
                case 'string':
                    if( (<string><unknown>this[key]) .length <= 0) throw Error(`${key} is empty`);
                break;
                case 'number':
                    if( (<number><unknown>this[key]) <= 0) throw Error(`${key} is 0`);
                break;
                default:
                    throw Error('Error') ;
            }
        }
        return true;
    }

    toString() {
        //!No DRY
        // if(this.name.length <= 0) throw Error('name is empty'); 
        // if(this.price <= 0) throw Error('price is 0'); 
        // if(this.size.length <= 0) throw Error('size is empty'); 
        // return `${this.name} (${this.price}), ${this.size}`
        if(!this.isProductReady) return;
        

        return `${this.name} (${this.price} ${this.size})`
    }
}

(()=> {
    const bluePants = new Product('Blue Large Pants', 10, 'S');
    console.log(bluePants.toString()); 
})();