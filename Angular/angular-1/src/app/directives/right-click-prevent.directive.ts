import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appRightClickPrevent]',
  standalone: true
})
export class RightClickPreventDirective {

  constructor() { }

  @HostListener('contextmenu',['$event'])
  onRightClick(event:MouseEvent){
    event.preventDefault()
  }

}
