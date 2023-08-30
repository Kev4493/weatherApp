import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyWeather } from '../models/weather.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { WeatherForecast } from '../models/forecast.model';


@Injectable({
  providedIn: 'root'
})

export class WeatherDataService {

  myWeather: MyWeather;
  weatherForecast: WeatherForecast
  apiKey = '50d3840fffb1eaee4ef1e7f8dcada229'

  units = 'metric';
  temperatureSymbol = '°C'
  speedSymbol = 'm/s'
  unitC = true;
  unitF = false;
  
  latitude: Number;
  longitude: Number;

  defaultCityName = 'Stuttgart'
  usersLocation = '';
  cityName: String;
  cityCollection = [];


  constructor(private http: HttpClient, private firestore: AngularFirestore) { }


  getWeatherData() {
    this.loadDefaultCity();
    this.callCurrentWeatherApi();
  }


  loadDefaultCity() {
    if (!this.usersLocation) {
      this.cityName = 'Stuttgart'
    } else {
      if (this.usersLocation) {
        this.cityName = this.usersLocation
      }
    }
  }


  callCurrentWeatherApi() {
    this.http
      .get<MyWeather>(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.apiKey}&lang=de&units=${this.units}`)
      .subscribe({
        next: (res) => {
          this.myWeather = res;
          this.latitude = this.myWeather.coord.lat;
          this.longitude = this.myWeather.coord.lon;
          console.log('currentWeatherData: ', this.myWeather);
          this.callWeatherForecastApi();
        }
      })
  }


  callWeatherForecastApi() {
    this.http
      .get<WeatherForecast>(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.latitude}&lon=${this.longitude}&appid=${this.apiKey}&lang=de&units=${this.units}`)
      .subscribe({
        next: (res) => {
          this.weatherForecast = res;
          console.log('weatherForecast: ', this.weatherForecast);
        }
      })
  }


  loadCitysFromDb() {
    this.firestore
      .collection('citys')
      .valueChanges({ idField: 'documentID' })
      .subscribe((changes: any) => {
        // console.log('download complete from DB ', changes)
        this.cityCollection = changes;
      })
  }


  roundNumber(originalNumber) {
    return Math.ceil(originalNumber);
  }
}
