import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Weather } from '../../providers/weather';

@Component({
    selector: 'page-forecast',
    templateUrl: 'forecast.html',
    providers: [Weather]
})

export class ForecastPage {
    public cityWeather;
    public forecast = [];
    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                public weather: Weather
            ) {
        this.cityWeather = navParams.get('cityWeather');
        this.getForecast(this.cityWeather.id);
    }
    
    getForecast(cityId) {
        this.weather.forecast(cityId, 7)
            .map(data => data.json())
            .subscribe(data => {
                this.forecast = data.list;
            },
            err => console.log(err),
            () => console.log('forecast success')
        )
    }

    ionViewDidLoad() {}

}
