import { Component } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent {

  constructor(public weatherData: WeatherDataService) { }

  ngOnInit() {
    this.weatherData.getWeatherData('Stuttgart');
  }
}
