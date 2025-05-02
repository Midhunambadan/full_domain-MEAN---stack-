import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  message1!:string
  message2!:string
  sendToChild(){
    this.message1='This message from you father'
  }

  handleEvent(event:string){
    this.message2=event
  }
}
