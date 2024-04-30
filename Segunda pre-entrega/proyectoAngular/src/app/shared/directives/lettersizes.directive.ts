import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLettersizes]',
})
export class LettersizesDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.fontSize = '20px';
  }
}
