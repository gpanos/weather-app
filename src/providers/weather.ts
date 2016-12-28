import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Geolocation } from 'ionic-native';
import { Observable } from 'rxjs/Observable';
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
    
    forecast(cityId:string, numOfDays:number){
        let url = this.baseUrl + 'forecast/daily';
        url += '?appId=' + this.appId;
        url += '&id=' + cityId;
        url += '&cnt=' + numOfDays;
        
        return this.http.get(url);
    }
    
    local() {
        let Obs = Observable.create(observer => {
            
            Geolocation.getCurrentPosition().then((resp) => {
                let lat = resp.coords.latitude;
                let lng = resp.coords.longitude;

                let url = this.baseUrl + 'weather';
                url += '?appId=' + this.appId;
                url += `&lat=${lat}&lon=${lng}`;
                
                this.http.get(url)
                    .subscribe(data => {
                        observer.next(data.json());
                    },
                    err => observer.error(err),
                    () => observer.complete()
                )
                
            });
            
        });
        
        return Obs;
    }

}
