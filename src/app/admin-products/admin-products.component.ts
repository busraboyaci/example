import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductRepository } from '../repository.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent  {
  model: ProductRepository;
  // html sayfasındaki problemi undefined diyerek çözdük. 
  selectedProduct: string | undefined;
  constructor() { 
    this.model = new ProductRepository();
  }

  ngOnInit(): void {
  }
  // selected edilip edilmediğini kontrol ettiğimiz method
  getSelected(product: Product): boolean{
    return product.name == this.selectedProduct;
  }

}
