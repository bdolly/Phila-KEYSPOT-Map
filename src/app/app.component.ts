import { Component } from '@angular/core';
import { KeyspotCardComponent } from './keyspot-card/keyspot-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'KEYSPOTS';
  markers = [];

  constructor(){
  	
  }


}
