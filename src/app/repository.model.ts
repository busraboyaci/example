import { SimpleDataSource } from "./datasource.model";
import { Product } from "./product.model";

export class ProductRepository{
    private datasource: SimpleDataSource = new SimpleDataSource;
    private products: Product[] = [];
    
    // constructor içerisine yukarıdaki elemanları dolduruyoruz
    constructor(){
        this.datasource = new SimpleDataSource();
        this.products = new Array<Product>();
        // datasource'taki tüm listeyi products ın içine atıyoruz.
        this.datasource.getProducts().forEach(p=>this.products.push(p));
    }
    // products'ı getirecek olan metod
    getProducts(): Product[]{
        return this.products;
    }
// hata yüzünden | undefined eklentisini yaptım
    getProductById(id: number): Product | any{
        return this.products.find(p => p.id == id);
    }
}