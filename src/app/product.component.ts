import {Component} from "@angular/core";
import { Product } from "./product.model";
import { ProductRepository } from "./repository.model";

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.css"]
})

export class ProductComponent {
    model: ProductRepository = new ProductRepository();
    newProduct: Product = new Product();

    // new product'ı json formatına dönüştürüyoruz
    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }
    // ürün eklediğimiz metodu oluşturuyoruz
    
    addProduct(p: Product){
        console.log("new product: "+ this.jsonProduct);
    }
    log(m:any){
        console.log(m);
    }

    }