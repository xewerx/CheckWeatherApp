import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  viewMap = 0;

  constructor(private service: MainServiceService) {}

  ngOnInit(): void {
    this.service.getView().subscribe(view => {
      this.viewMap = view;
    });
  }

}
