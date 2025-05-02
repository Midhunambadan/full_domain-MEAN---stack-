import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() data!:string

  @Output() eventEmitter=new EventEmitter()

  sendToFather(){
    this.eventEmitter.emit('This message from your child')
  }

}
