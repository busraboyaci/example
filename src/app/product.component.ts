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

     // keyUp metodu kullanıcının klavyeden bir tuşa basmasıyla çalışır.
     onKeyUp($event: any){
         if($event.keycode === 13){
            console.log("enter was pressed");
         }
     }
     // enter olup olmadığını kontrole gerek kalmadı [keyup.enter ile yaptık]
     onKeyUpp(){
        console.log("enter was pressed");
     }
     // inputun value deperini almak için 
     getOnKeyUpValue($event: any){
         console.log($event.target.value);
     }
     // id bilgisi girilen input
     getOnKeyUpValueId(email: string){
        console.log(email);
    }
}