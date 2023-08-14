import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyWeather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})

export class WeatherDataService {

  myWeather: MyWeather;
  units = 'metric';

  constructor(private http:  HttpClient) { }

  getWeatherData(cityName: string) {
    this.http
    .get<MyWeather>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=50d3840fffb1eaee4ef1e7f8dcada229&lang=de&units=${this.units}`)

    .subscribe({
      next: (res) => {
        this.myWeather = res;
        console.log('current weatherData: ', this.myWeather);
      }
    })
  }
}
