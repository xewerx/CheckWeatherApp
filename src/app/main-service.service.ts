import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor() { }

  view: number;
  private viewObs = new Subject<number>();


  test() {
    console.log(this.view);
    this.viewObs.next(this.view);
  }

  getView(): Observable<number> {
    return this.viewObs.asObservable();
  }

  getData() {

  }
}
