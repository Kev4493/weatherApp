import { Component } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-side-screen',
  templateUrl: './side-screen.component.html',
  styleUrls: ['./side-screen.component.scss']
})
export class SideScreenComponent {

  constructor(public weatherData: WeatherDataService) {}


  changeUnitToF() {
    if (this.weatherData.unitC == true) {
      this.weatherData.unitC = false;
      this.weatherData.unitF = true;
      this.weatherData.units = 'imperial'
      this.weatherData.getWeatherData('Ludwigsburg')
    }
  }

  
  changeUnitToC() {
    if (this.weatherData.unitF == true) {
      this.weatherData.unitF = false;
      this.weatherData.unitC = true;
      this.weatherData.units = 'metric'
      this.weatherData.getWeatherData('Ludwigsburg')
    }
  }

  roundDecimal(decimal) {
    return Math.round(decimal);
  }

}
