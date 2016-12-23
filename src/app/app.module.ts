import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddWeatherPage } from '../pages/add-weather/add-weather';
import { ForecastPage } from '../pages/forecast/forecast';
import { TemperaturePipe } from '../pipes/temperature';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddWeatherPage,
    ForecastPage,
    TemperaturePipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddWeatherPage,
    ForecastPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
