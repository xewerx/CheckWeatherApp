import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { MapComponent } from './map/map.component';
import { MainServiceService } from './main-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LeftmenuComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MainServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
