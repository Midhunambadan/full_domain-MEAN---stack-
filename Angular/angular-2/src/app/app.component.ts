import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { SearchComponent } from './components/search/search.component';
import { ColourComponent } from './components/colour/colour.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [


    CounterComponent,
    SearchComponent,
    ColourComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-2';
}
