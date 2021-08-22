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
// validation mesajını metod aracılığıyla hazırladık ancak requared dışındaki özellikler çalışmıyor
    getValidationErrors(state: any){
        let ctrlName: string = state.name;
        let messages: string[] = [];

        if(state.errors){
            for(let errorName in state.errors){
                switch(errorName){
                    case "required":
                        messages.push(`You must enter a`+ (ctrlName));
                        break;
                    case "minlength":
                        messages.push(`min 3 char`+ (ctrlName));
                        break;
                    case "pattern":
                        messages.push(`only letters`+ (ctrlName));
                        break;
                }
            }
        }
        return messages;
    }

    }