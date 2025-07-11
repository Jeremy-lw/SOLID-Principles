type typeSize = ''|'S'|'M'|'L'|'XL';

class Product {
    constructor(
        public name: String = '',
        public price: number = 10,
        public size: typeSize = 'S',
    ){}    

    toString() {
        //No DRY
        if(this.name.length <= 0) throw Error('name is empty'); 
        if(this.price <= 0) throw Error('price is 0'); 
        if(this.size.length <= 0) throw Error('size is empty'); 
        return `${this.name} (${this.price}), ${this.size}`
    }
}

(()=> {
    const bluePants = new Product('Blue Large Pants');
    console.log(bluePants.toString()); 
})();