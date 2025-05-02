import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './components/parent-child/parent/parent.component';
import { SenderComponent } from './components/sibling-communication/sender/sender.component';
import { ReceiverComponent } from './components/sibling-communication/receiver/receiver.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MouseComponent } from './components/mouse/mouse.component';
import { ColourChangeComponent } from './components/colour-change/colour-change.component';
import { HideComponent } from './components/hide/hide.component';
import { FetchComponent } from './components/fetch/fetch.component';
import { ReversePipe } from './pipe/reverse.pipe';
import { VowelsPipe } from './pipe/vowels.pipe';
import { UppercasePipe } from './pipe/uppercase.pipe';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { RightClickPreventDirective } from './directives/right-click-prevent.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ParentComponent,
    SenderComponent,ReceiverComponent,
    NavBarComponent,MouseComponent,
    ColourChangeComponent,HideComponent,
    FetchComponent,
  
  
    ReversePipe,VowelsPipe,
    UppercasePipe,
  
    NumberOnlyDirective,
    RightClickPreventDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-1';
}
