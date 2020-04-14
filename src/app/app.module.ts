import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { MapComponent } from './map/map.component';
import { MainServiceService } from './main-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LeftmenuComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MainServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
