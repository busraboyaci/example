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

     // disable eğer true ise var olan clasın üzerine disable clası eklendi
    disabled = true;

    getClasses(id: number): string{
        let product = this.model.getProductById(id);
        return (product.price <= 1000 ? "bg-info": "bg-secondary")+ " m-2 p-2";
    }

    getClassMap(id: number): Object{
        let product = this.model.getProductById(id);
        return {
            "bg-info": product.price <=1000,
            "bg-secondary": product.price >1000,
            "text-center text-white": product.name == "samsung S6"
        }
    }

    color: string = "red";
    fontSize: string = "25px";

    getStyle(id: number): object {
        // ürün bilgisini alıyoruz
        let product = this.model.getProductById(id);
        // geriye obje dönduruyoruz
        return {
            fontSize: "25px",
            color: product.price <=1000? "green":"red"
        }
    }

}