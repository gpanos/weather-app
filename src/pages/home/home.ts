import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { AddWeatherPage } from '../add-weather/add-weather';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public weatherList = [];
    constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {
                  

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
        // get weather form api
        // this.weatherList.push(data);

    }

}
