import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeyspotCardComponent } from './keyspot-card/keyspot-card.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyspotCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
