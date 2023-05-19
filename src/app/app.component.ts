import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from './services/weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit() {
    this.weatherDataService.ngOnInit();
  }

}
