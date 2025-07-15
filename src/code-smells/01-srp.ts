(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class productService{



        getProduct( id: number){
            console.log('Producto: ',{id, name: 'OLED TV'});
        }        

        saveProduct(product: Product){
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer {
        private email: string = 'jeremy@correo.com';
        sendEmail( email: string[]){
            console.log('Enviando correo a los clientes', email);
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private ProductService: productService;
        private mailet: Mailer;

        constructor( ProductService: productService, mailet: Mailer){
            this.ProductService = ProductService;
            this.mailet = mailet;
        }
    
        loadProduct( id: number ) {
            this.ProductService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.ProductService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailet.sendEmail(['correo.com']);
        }
    
        
    
    }
    

    class CartBlock {
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    const ProductService = new productService();
    const mailer = new Mailer();


    const productBloc = new ProductBloc(ProductService, mailer);
    const cartBlock = new CartBlock();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    //productBloc.onAddToCart(10);








})();