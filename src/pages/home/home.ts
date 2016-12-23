import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AddWeatherPage } from '../add-weather/add-weather';
import { ForecastPage } from '../forecast/forecast';
import { Weather } from '../../providers/weather';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    providers: [Weather]
})
export class HomePage {
    public weatherList = [];
    
    constructor(public navCtrl: NavController,
                public modalCtrl: ModalController,
                public weather: Weather
          ) {
                  

    }
  
    addWeather() {
      let modal = this.modalCtrl.create(AddWeatherPage);
      modal.onDidDismiss((data) => {
          if (data) {
              this.getWeather(data.city, data.country);
          }      
      });
      modal.present();
    }
    
    getWeather(city:string, country:string) {
        this.weather.city(city, country)
            .map(data => data.json())
            .subscribe(data => {
                this.weatherList.push(data);
            },
            err => console.log(err),
            () => console.log('getWeather success')
        )
    }
    
    viewForecast(cityWeather){
        this.navCtrl.push(ForecastPage, {cityWeather: cityWeather});
    }

}
