import {environment} from '../environments/environment';

import { Component, OnInit } from '@angular/core';
import { KeyspotsApiService } from './services/keyspots-api.service';
import { KeyspotCardComponent } from './keyspot-card/keyspot-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:   [ KeyspotsApiService ],
})

export class AppComponent implements OnInit{

  title: string = 'KEYSPOTS';
  markers: Array<any> = [];

  // philadelphia city hall coordinates
  lat: number        = 39.9524;
  lng: number        = -75.1636;

  // inject our keyspots service 
  constructor(private keyspotsService: KeyspotsApiService){}

  ngOnInit() {}

}
