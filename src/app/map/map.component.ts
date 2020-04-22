import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  viewMap = 0;

  // array of towns from maps
  // tslint:disable-next-line: max-line-length
  private towns: string[] = ['gdansk', 'szczecin', 'bydgoszcz', 'poznan', 'bialystok', 'warszawa', 'lodz', 'wroclaw', 'lubin', 'katowice', 'krakow'];

  // array of interfaces<town> with data from API
  private readyTowns = new Array<town>();


  constructor(private service: MainServiceService) { }

  ngOnInit(): void {


    this.service.getView().subscribe(view => {
      this.viewMap = view;
    });



    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.towns.length ; i++) {
    // tslint:disable-next-line: max-line-length
    this.service.getData('https://api.openweathermap.org/data/2.5/weather?q=' + this.towns[i] + '&appid=207cedbdc851a69d4e89de7fbab68010').subscribe(data => {
      this.readyTowns.push({
        temp: Math.round(data.main.temp - 273.15),
        tempFeel: Math.round(data.main.feels_like - 273.15),
        windSpeed: Math.round(data.wind.speed),
        humidity: Math.round(data.main.humidity),
        pressure: Math.round(data.main.pressure)
      });
      // console.log(this.towns[i] );
    });

    // console.log(this.readyTowns);
  }


}





}

// tslint:disable-next-line: class-name
interface town {
  temp?: number;
  tempFeel?: number;
  windSpeed?: number;
  humidity?: number;
  pressure?: number;
}
