import {Component} from "@angular/core";
import { Product } from "./product.model";
import { ProductRepository } from "./repository.model";

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.css"]
})

export class ProductComponent {
// pipes olarak kullandığımız değişkenler
    today: number = Date.now();
    title: string = "Angular Kursu";
    students: number  = 21536;
    price: number = 395.9954;
    completed: number = 0.26;



    }