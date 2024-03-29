import {environment} from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {LoadingBarModule, LoadingBarService} from "ng2-loading-bar";
import { HttpModule } from '@angular/http';

import { KeyspotCardComponent } from './keyspot-card/keyspot-card.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyspotCardComponent
  ],
  imports: [
   BrowserModule,
   HttpModule,
   LoadingBarModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAPS_API_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
