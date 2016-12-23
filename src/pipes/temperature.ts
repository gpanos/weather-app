import { Injectable, Pipe } from '@angular/core';

@Pipe({
    name: 'temperature'
})
@Injectable()
export class TemperaturePipe {
    
    transform(value, args) {
        var c = Math.round(parseInt(value, 10) - 273.15);
        return `${c} ℃`;
    }
}
