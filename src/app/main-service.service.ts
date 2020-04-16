import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http: HttpClient) { }

  view: number;
  private viewObs = new Subject<number>();


  test() {
    console.log(this.view);
    this.viewObs.next(this.view);
  }

  getView(): Observable<number> {
    return this.viewObs.asObservable();
  }

  getData(url: string): Observable<JSON> {
    return this.http.get<JSON>(url);
  }
}
