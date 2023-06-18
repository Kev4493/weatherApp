import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyWeather } from '../models/weather.model';
import { WeatherForecast } from '../models/forecast.model';


@Injectable({
  providedIn: 'root'
})

export class WeatherDataService {

  myWeather: MyWeather;
  weatherForecast: WeatherForecast
  units = 'metric';
  unitC = true
  unitF: boolean;
  lat: number;
  lon: number;
  location: any;
  allLocations = [];

  constructor(private http: HttpClient) { }


  getWeatherData(cityName: string) {
    this.http
      .get<MyWeather>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=50d3840fffb1eaee4ef1e7f8dcada229&lang=de&units=${this.units}`)

      .subscribe({
        
        next: (res) => {
          this.myWeather = res;
          this.lat = this.myWeather.coord.lat
          this.lon = this.myWeather.coord.lon
          console.log('current weatherdata: ', this.myWeather)
          this.getWeatherForecast();
        },

        error: (error) => console.log(error.message),
        complete: () => console.info('API call completed')
      })
  }


  getWeatherForecast() {
    this.http
      .get<WeatherForecast>(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&appid=50d3840fffb1eaee4ef1e7f8dcada229&lang=de&units=${this.units}`)

      .subscribe({
        next: (res) => {
          this.weatherForecast = res;
          console.log('5day / 3hour forecast data:', this.weatherForecast);
        },

        error: (error) => console.log(error.message),
        complete: () => console.info('API call completed')
      })
  }
}
