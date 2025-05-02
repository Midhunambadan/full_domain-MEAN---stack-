import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]',
  standalone: true
})
export class NumberOnlyDirective {

  constructor() { }

  @HostListener('keydown',['$event'])
  onKeyDown(event:KeyboardEvent){
    const allowed=['Backspace','Tab']

    if(event.key >= '0' && event.key<= '9' || allowed.includes(event.key)){
      return
    }else{
      event.preventDefault()
    }
  }


}
