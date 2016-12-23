import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-add-weather',
    templateUrl: 'add-weather.html'
})

export class AddWeatherPage {
    public data = {
        
    };
    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                public viewCtrl: ViewController
            ) {
              
            }

  
    dismiss(formData) {
      this.viewCtrl.dismiss(formData);
    }
  
  
    ionViewDidLoad() {}

}
