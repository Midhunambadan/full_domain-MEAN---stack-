import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.css'
})
export class RadioButtonComponent {

  isCheck:Boolean=true

  changeRadio(){
    this.isCheck=this.isCheck==true?false:true
  }

}
