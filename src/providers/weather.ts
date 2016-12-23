import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Weather {
    private appId   = '2ceea1ce38a473d2081fe70be6ff4d72';
    private baseUrl = 'http://api.openweathermap.org/data/2.5/';
    constructor(public http: Http) {}
  
    city(city:string, country:string) {
      let url = this.baseUrl + 'weather';
      url += '?appId=' + this.appId;
      url += '&q=' + city;
      url += ',' + country;
      
      return this.http.get(url);
    }

}
