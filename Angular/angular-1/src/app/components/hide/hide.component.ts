import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hide.component.html',
  styleUrl: './hide.component.css'
})
export class HideComponent {

  isHide:boolean=false

  hide(){
    this.isHide=this.isHide===true?false:true
  }
}
