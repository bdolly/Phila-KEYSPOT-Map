import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'keyspot-card',
  templateUrl: './keyspot-card.component.html',
  styleUrls: ['./keyspot-card.component.scss']
})

export class KeyspotCardComponent implements OnInit {

  @Input() expanded: boolean;
  @Input() title: string;
  @Input() address: string;
  @Input() phone: string;
  @Input() url: string;
  @Input() desc: string;
 
  constructor() { }

  ngOnInit() {
  }

}
