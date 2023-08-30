import { Component } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-side-screen',
  templateUrl: './side-screen.component.html',
  styleUrls: ['./side-screen.component.scss']
})
export class SideScreenComponent {

  constructor(public weatherData: WeatherDataService) {}

  // changeUnit(unit: string) {
  //   if(this.weatherData.units == unit) {
  //     return
  //   } else if (this.weatherData.units !== unit) {
  //     this.weatherData.units = unit;
  //     this.weatherData.getWeatherData();
  //   }
  // }

  changeUnitToC() {
    this.weatherData.unitC = true;
    this.weatherData.unitF = false;
    this.weatherData.units = 'metric'
    this.weatherData.getWeatherData();
    console.log('unitC = ',this.weatherData.unitC)
    console.log('unitF = ',this.weatherData.unitF)
  }

  changeUnitToF() {
    this.weatherData.unitC = false;
    this.weatherData.unitF = true;
    this.weatherData.units = 'imperial'
    this.weatherData.getWeatherData();
    console.log('unitC = ',this.weatherData.unitC)
    console.log('unitF = ',this.weatherData.unitF)
  }

}
