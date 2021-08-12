import { Product } from "./product.model";

export class SimpleDataSource{
    private products: Product[];

    constructor(){
        this.products = new Array<Product>(
            new Product (1, "samsung S5", "iyi telefon", "1.jpeg", 1000),
            new Product (2, "samsung S6", "iyi telefon", "2.jpeg", 2000),
            new Product (3, "samsung S7", "iyi telefon", "3.jpeg", 3000),
            new Product (4, "samsung S8", "iyi telefon", "4.jpeg", 4000),
            new Product (5, "samsung S9", "iyi telefon", "5.jpeg", 5000)
        )
    }
// private i public oalrak dışarıya açan bir metod
    getProducts(): Product[]{
        return this.products;
    }
}