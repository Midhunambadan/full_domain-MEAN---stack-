import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './store/counter/counter.reducer';
import { searchTextReducer } from './store/search/search.reducer';
import { colourReducer } from './store/colour/colour.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    provideStore({counter:counterReducer, searchText:searchTextReducer,textColour:colourReducer})]
};
