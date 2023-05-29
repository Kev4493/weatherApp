import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { myWeather } from '../models/weather.model';


@Injectable({
  providedIn: 'root'
})

export class WeatherDataService {

  myWeather: myWeather;

  units = 'metric';

  unitC = true

  unitF;

  constructor(private http: HttpClient) { }


  getWeatherData(cityName: string) {

    this.http
      .get<myWeather>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=50d3840fffb1eaee4ef1e7f8dcada229&lang=de&units=${this.units}`)

      .subscribe({
        
        next: (res) => {
          this.myWeather = res;
          console.log(this.myWeather)
        },

        error: (error) => console.log(error.message),

        complete: () => console.info('API call completed')
      })
  }



}
