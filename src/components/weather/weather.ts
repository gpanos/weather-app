import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'weather',
    templateUrl: 'weather.html'
})
export class WeatherComponent {
    @Input() weather: Object;
    @Output() viewMore: EventEmitter<Object> = new EventEmitter();
    
    constructor() {}
    
    hitWeather() {
        this.viewMore.next(this.weather);
    }

}
