import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse',
  standalone: true,
  imports: [],
  templateUrl: './mouse.component.html',
  styleUrl: './mouse.component.css'
})
export class MouseComponent {

  message!:string
  clickMe(){
    this.message='Button clicked'
  }

  search(event:Event){
    let input=(event.target as HTMLInputElement).value
    // let input=event.target.value
    this.message=input
  }

  onClick(event:any){
    let input=event.target.value
    this.message=input
  }
}
