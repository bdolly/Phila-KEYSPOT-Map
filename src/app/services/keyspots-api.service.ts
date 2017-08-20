import {environment} from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class KeyspotsApiService {

 //set a constant for our locations endpoint 
 LOCATIONS_ENDPOINT: string =  `${environment.KEYSPOTS_API_BASE}/locations`;


  constructor(private _http: Http) { }

  /**
   * GET our keyspots data. 
   * First grab all location ids as an observale stream (flatMap) for '/locations'.
   * Then mergeMap each id to a request to '/locations/<id:number>'. 
   * This ensures that on the front-end each location will be added as it's response is returned
   * instead of waiting for all requests to return before delivering results to the front-end. 
   * This makes for a smoother user experience.
   *
   * Data for this pulled from https://www.opendataphilly.org/dataset/philly-keyspot-locations
   * 
   */
  getKeyspots(){

  	return this._http
  				.get(`${environment.KEYSPOTS_API_BASE}/locations`)
          		.flatMap(res => res.json())
          		.mergeMap( (loc, i) =>{ 
          		  
          		  return this._http.get(`${environment.KEYSPOTS_API_BASE}/locations/${loc["sl_id"]}`)
          		} );
            
  }

}
