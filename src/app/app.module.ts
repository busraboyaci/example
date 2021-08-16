import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductComponent } from './product.component';
import { InputEmailDirective } from './input-email.directive';



@NgModule({
  declarations: [
    ProductComponent,
    InputEmailDirective
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
