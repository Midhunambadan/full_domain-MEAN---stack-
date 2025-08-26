import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSearchText } from '../../store/search/search.selector';
import { AsyncPipe } from '@angular/common';
import { searchText } from '../../store/search/search.action';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  text$:Observable<string>

  constructor(private store:Store<{text:string}>){
    this.text$=this.store.select(selectSearchText)
  }

  enterText(event:any){
    let input=event.target.value
    this.store.dispatch(searchText({search:input}))
  }
}
