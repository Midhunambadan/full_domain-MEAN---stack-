import { Component } from '@angular/core';

@Component({
  selector: 'app-colour-change',
  standalone: true,
  imports: [],
  templateUrl: './colour-change.component.html',
  styleUrl: './colour-change.component.css'
})
export class ColourChangeComponent {

  colour!:string
  changeColour(){
    this.colour=this.colour==='green'?'yellow':'green'
  }

}
