import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})

export class MainScreenComponent implements OnInit {

  constructor(public weatherData: WeatherDataService) {}

  ngOnInit(): void {
    this.weatherData.getWeatherData('Ludwigsburg')
  }
  
}
