import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyWeather } from '../models/weather.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})

export class WeatherDataService {

  myWeather: MyWeather;
  units = 'metric';

  defaultCityName = 'Stuttgart'
  usersLocation = '';
  cityName: String;
  cityCollection = [];
  

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }


  getWeatherData() {

    this.startWithCity()

    this.http
      .get<MyWeather>(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=50d3840fffb1eaee4ef1e7f8dcada229&lang=de&units=${this.units}`)

      .subscribe({
        next: (res) => {
          this.myWeather = res;
          console.log('current weatherData: ', this.myWeather);
        }
      })
  }


  startWithCity() {
    if (!this.usersLocation) {
      this.cityName = 'Stuttgart'
    } else {
      if (this.usersLocation) {
        this.cityName = this.usersLocation
      }
    }
  }


  loadCitysFromDb() {
    this.firestore
    .collection('citys')
    .valueChanges({idField: 'documentID'})
    .subscribe((changes: any) => {
      console.log('download complete from DB ', changes)
      this.cityCollection = changes;
    })
  }


  roundNumber(originalNumber) {
    return Math.ceil(originalNumber);
  }
}
