import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterState } from '../../store/state';
import { Store } from '@ngrx/store';
import { selectCount } from '../../store/counter/counter.selector';
import { decrement, increment, reset } from '../../store/counter/counter.action';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count$!:Observable<number>

  constructor(private store : Store<{count:CounterState}>){
    this.count$=this.store.select(selectCount)
  }


  increment(){
    this.store.dispatch(increment())
  }

  decrement(){
    this.store.dispatch(decrement())
  }

  reset(){
    this.store.dispatch(reset())
  }

}
