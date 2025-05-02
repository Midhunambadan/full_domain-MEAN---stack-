import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../../shared/communication.service';

@Component({
  selector: 'app-receiver',
  standalone: true,
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.css'
})
export class ReceiverComponent implements OnInit {

  constructor(private CommunicationService:CommunicationService){}

  message!:string
  ngOnInit(): void {
    this.CommunicationService.currentMessage.subscribe((res:string)=>{
      this.message=res
    })  
  }
}
