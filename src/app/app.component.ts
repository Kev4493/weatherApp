import { Component } from '@angular/core';
import { WeatherDataService } from './services/weather-data.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather_app';

  constructor(public weatherData: WeatherDataService, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.weatherData.loadCitysFromDb();
    this.weatherData.getWeatherData();
    this.weatherData.getCurrentDate()
  }
}
