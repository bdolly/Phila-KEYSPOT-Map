import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'keyspot-card',
  templateUrl: './keyspot-card.component.html',
  styleUrls: ['./keyspot-card.component.scss']
})

export class KeyspotCardComponent implements OnInit {

	expanded: boolean = false;
 
  constructor() { }

  ngOnInit() {
  }

}
