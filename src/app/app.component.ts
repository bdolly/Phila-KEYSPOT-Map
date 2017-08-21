import {environment} from '../environments/environment';

import { Component, OnInit } from '@angular/core';
import { KeyspotsApiService } from './services/keyspots-api.service';
import { KeyspotCardComponent } from './keyspot-card/keyspot-card.component';
import {LoadingBarModule, LoadingBarService} from "ng2-loading-bar";

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
	markerClickable: boolean ,
	phone: string,
	url: string,
	desc: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:   [ KeyspotsApiService ],
})

export class AppComponent implements OnInit{

// loading bar 
  height      = 5;
  color       = "#f0ad4e";
  runInterval = 100;


  title: string = 'KEYSPOTS';
  keyspots: marker[] = [];
  infoWindowOpened = null;
  isFirst          = false;

  // philadelphia city hall coordinates
  lat: number        = 39.9524;
  lng: number        = -75.1636;


  // inject our keyspots service 
  constructor(private _KeyspotsService: KeyspotsApiService,  private loadingBarService: LoadingBarService ){}



  /**
   * On compoent initialization grab our locations data stream.
   * Then format them to our marker interface. 
   */
  ngOnInit() {

  	// listen to the keyspots stream and process data as it's received 
  	this._KeyspotsService.getKeyspots()
  			.subscribe( _location =>{
  					// check for first result 
  					if(!this.isFirst){
  						this.isFirst = !this.isFirst;
  						this.loadingBarService.start();
  					} 

  					// push our locations markers to our keyspots array 
  					this.keyspots.push(this.formatMarker(_location.json()));

          		},
          		(err)=>{ console.log(err) },
          		()=>{
          			console.log('complete');
          			// once all the data is loaded update the markers 
          			// opacity and markerClickable
          			this.keyspots = this.keyspots.map(marker=>{
          				marker.opacity = 1;
          				return marker;
          			})
          			this.loadingBarService.complete();
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
  			markerClickable: false,
  			phone: locationData.sl_phone,
  			url:  locationData.sl_url,
  			desc: locationData.sl_description

  		}
  	}



  	/**
  	 * On Marker Click scroll it's corresponding card into view;
  	 * Then fade out all other markers and expand the active card.  
  	 * @param {sting}    label - id of sl_location 
  	 * @param {number} index - zero based list index 
  	 */
  	public clickedMarker(label: string, infoWindow: any, index: number): void {
  		
  		// scroll card into view
  		let locationCard = document.getElementById('ks__card-'+index);
  		locationCard.scrollIntoView({block:'center'});

  		
  		// set expanded state 
		this.keyspots =  this.keyspots.map(location=>{
			location.expanded  = location.label !== label ? false : true;
  			return location;
  		})

		// close any open infoWindows
		if( this.infoWindowOpened ===  infoWindow) return;
    	if(this.infoWindowOpened !== null) this.infoWindowOpened.close();
    	this.infoWindowOpened = infoWindow;

  	}




  	/**
  	 * Reset marker and card states when the infoWindow is closed
  	 * @param {marker} marker - marker object attached to map marker
  	 * @param {number} i      - zero based list index 
  	 */
  	public onInfoWindowClose(marker: marker ,infoWindow, i: number): void{
  		
  		this.keyspots = this.keyspots.map(location=>{
  			if( this.infoWindowOpened ===  infoWindow) location.expanded = false; 
  			return location;
  		});
  	}





}
