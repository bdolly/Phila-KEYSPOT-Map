import {environment} from '../environments/environment';

import { Component, OnInit } from '@angular/core';
import { KeyspotsApiService } from './services/keyspots-api.service';
import { KeyspotCardComponent } from './keyspot-card/keyspot-card.component';


// typescript interface for our custom marker object 
interface marker {
	lat:       number,
	lng:       number, 
	label:     string,
	draggable: boolean,
	opacity:   number, 
	visible:   boolean,
	title:     string,
	init:      boolean,
	expanded:  boolean,
	address:   any,
	clickable: boolean 
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:   [ KeyspotsApiService ],
})

export class AppComponent implements OnInit{

  title: string = 'KEYSPOTS';
  keyspots: marker[] = [];

  // philadelphia city hall coordinates
  lat: number        = 39.9524;
  lng: number        = -75.1636;

  // inject our keyspots service 
  constructor(private _KeyspotsService: KeyspotsApiService){}

  /**
   * On compoent initialization grab our locations data stream.
   * Then format them to our marker interface. 
   */
  ngOnInit() {

  	// listen to the keyspots stream and process data as it's received 
  	this._KeyspotsService.getKeyspots()
  			.subscribe( _location =>{
  				// push our locations markers to our keyspots array 
  				this.keyspots.push(this.formatMarker(_location.json()));

          	},
          	(err)=>{
          		console.log(err)
          	},
          	()=>{
          		console.log('complete');
          		// once all the data is loaded update the markers 
          		// opacity and clickable
          		this.keyspots = this.keyspots.map(marker=>{
          			marker.opacity = 1;
          			marker.clickable = true;
          			return marker;
          		})
          	}
          	);
  }



  private formatMarker(locationData): marker{
  		return{
  			lat:       Number(locationData.sl_latitude) , 
  			lng:       Number(locationData.sl_longitude) ,
  			label:     locationData.sl_id ,
  			title:     locationData.sl_store,
  			draggable: false,
  			opacity:   0.25,
  			visible:   true,
  			init:      true,
  			expanded:  false,
  			address: `${locationData.sl_address} ${locationData.sl_address2 !== "" ? locationData.sl_address2 : ''}, ${locationData.sl_city}  ${locationData.sl_state} `,
  			clickable: false

  		}
  	}

  	/**
  	 * On Marker Click scroll it's corresponding card into view;
  	 * Then fade out all other markers and expand the active card.  
  	 * @param {sting}    label - id of sl_location 
  	 * @param {number} index - zero based list index 
  	 */
  	public clickedMarker(label: string, index: number): void {
  		
  		let locationCard = document.getElementById('ks__card-'+index);
  		locationCard.scrollIntoView();

		this.keyspots =  this.keyspots.map(location=>{
  			if(location.label !== label) location.opacity = 0.25;
  			if(location.label == label) location.expanded = true;
  			return location;
  		})
  	}


  	/**
  	 * Reset marker and card states when the infoWindow is closed
  	 * @param {marker} marker - marker object attached to map marker
  	 * @param {number} i      - zero based list index 
  	 */
  	onInfoWindowClose(marker: marker,i: number): void{
  		if(!marker.init)this.keyspots = this.keyspots.map(location=>{
  			location.opacity = 1; 
  			location.expanded = false; 
  			return location;
  		})
  		this.keyspots[i].init = false;
  	}





}
