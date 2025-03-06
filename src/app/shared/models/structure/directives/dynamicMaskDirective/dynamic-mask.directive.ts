import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDynamicMask]',
  standalone: false
})
export class DynamicMaskDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    const inputElement = this.el.nativeElement;
    let value = inputElement.value;

    if (value.length > 3) {
      value = this.applyMask(value, '00/000');
    } else {
      value = this.applyMask(value, '000');
    }

    inputElement.value = value;
  }

  private applyMask(value: string, mask: string): string {
    let maskedValue = '';
    let valueIndex = 0;
  
    value = value.replace(/\D/g, '');
  
    for (let i = 0; i < mask.length; i++) {
      if (mask[i] === '0' && valueIndex < value.length) {
        maskedValue += value[valueIndex++];
      } 
      else if (mask[i] !== '0') {
        maskedValue += mask[i];
      }
    }
    return maskedValue;
  }
}
