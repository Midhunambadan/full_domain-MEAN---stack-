import { Component } from '@angular/core';
import { CommunicationService } from '../../../shared/communication.service';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {

  constructor(private CommunicationService:CommunicationService){}
  sendTo(){
    this.CommunicationService.changeMessage('This is a important message from NASA')
  }

}
