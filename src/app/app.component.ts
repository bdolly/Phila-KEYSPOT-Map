import {environment} from '../environments/environment';

import { Component } from '@angular/core';
import { KeyspotCardComponent } from './keyspot-card/keyspot-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title: string = 'KEYSPOTS';
  markers: Array<any> = [];
  
  // philadelphia city hall coordinates
  lat: number        = 39.9524;
  lng: number        = -75.1636;

  constructor(){
  	
  }


}
