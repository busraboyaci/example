import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductRepository } from '../repository.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent  {
  products: Product[] = [];
  model: ProductRepository = new ProductRepository();
  
  constructor() { 
    this.products = this.model.getProducts();
  }

  ngOnInit(): void {
  }

}
