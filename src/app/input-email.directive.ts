import { Directive, ElementRef, HostListener } from '@angular/core';

// focus ve blur olaylarını yakalamak için  listener yapısına ihtiyaç var
@Directive({
  selector: '[appInputEmail]'
})
export class InputEmailDirective {
// ilgili input'a constructor içinde erişiyoruz.
constructor(private element: ElementRef) { }


  //input focus olayını aldığında onFocus metodu tetiklenir.
@HostListener('focus') onFocus(){
this.element.nativeElement.classList.add('bg-warning');
}  
// @ işareti için bir uyarıcı ekliyoruz ve eğer inputa @ yazılmazsa biz ekliyoruz.
@HostListener('blur') onBlur(){
  
this.element.nativeElement.classList.remove('bg-warning');
let value: string = this.element.nativeElement.value;

if(!value.includes('@')){
  this.element.nativeElement.value = value.toLowerCase()+('@gmail.com');
}

} 

}
