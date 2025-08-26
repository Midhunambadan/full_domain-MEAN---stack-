import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { colourState } from '../../store/state';
import { selectColour } from '../../store/colour/colour.selector';
import { changeColour } from '../../store/colour/colour.action';

@Component({
  selector: 'app-colour',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './colour.component.html',
  styleUrl: './colour.component.css'
})
export class ColourComponent {

  colour$:Observable<string>
  constructor(private store:Store<{colour:colourState}>){
    this.colour$=this.store.select(selectColour)
  }

  changeColour(){
    this.store.dispatch(changeColour())
  }
}
