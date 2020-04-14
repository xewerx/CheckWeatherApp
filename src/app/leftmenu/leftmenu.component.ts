import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

  constructor(private service: MainServiceService) { }

  ngOnInit(): void {
  }

  changeView(view: number) {
    this.service.view = view;
    this.service.test();
  }

}
