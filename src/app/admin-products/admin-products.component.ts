import { NgIf } from '@angular/common';
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
  selectedProduct: Product;

  constructor() { 
    this.model = new ProductRepository();
    this.selectedProduct = new Product;
    
  }

  ngOnInit(): void{

  }
  // selected edilip edilmediğini kontrol ettiğimiz method
  getSelected(product: Product): boolean{
    return product == this.selectedProduct;
  }
  editProduct(product: Product){
    this.selectedProduct = product;
  }
}
