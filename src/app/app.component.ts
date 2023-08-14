import { Component } from '@angular/core';
import { WeatherDataService } from './services/weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather_app';

  constructor(public weatherData: WeatherDataService) { }

  ngOnInit() {
    this.weatherData.getWeatherData('Stuttgart');
  }
}
