import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'keyspot-card',
  templateUrl: './keyspot-card.component.html',
  styleUrls: ['./keyspot-card.component.scss']
})

export class KeyspotCardComponent implements OnInit {

  expanded: boolean = false;

  @Input() title: string;
  @Input() address: string;
 
  constructor() { }

  ngOnInit() {
  }

}
