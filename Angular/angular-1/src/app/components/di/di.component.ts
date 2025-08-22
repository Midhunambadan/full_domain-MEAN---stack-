import { Component, inject } from '@angular/core';
import { SumService } from '../../shared/sum.service';

@Component({
  selector: 'app-di',
  standalone: true,
  imports: [],
  templateUrl: './di.component.html',
  styleUrl: './di.component.css'
})
export class DiComponent {

  // constructor(private SumService:SumService ){}
  
  private SumService=inject(SumService)

  num!:any
  sum(event:any){
    let input=(event.target as HTMLInputElement).valueAsNumber
    console.log(typeof input)
    this.num= this.SumService.add(input)
  }



}
