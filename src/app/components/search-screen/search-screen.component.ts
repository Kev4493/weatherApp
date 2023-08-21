import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city.class';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.scss']
})
export class SearchScreenComponent {

  city = new City();

  constructor(public weatherData: WeatherDataService, private firestore: AngularFirestore, private router: Router) {}

  addCityToDb() {
    this.firestore
    .collection('citys')
    .add(this.city.toJSON())
    .then((result:any) => {
      this.weatherData.usersLocation = this.city.cityName;
      this.weatherData.getWeatherData();
      this.router.navigate(['/'])
      console.log('added new city :', result);
      console.log('new current location is ', this.weatherData.usersLocation)
    })
  }


  changeCity(cityFromHistory) {
    this.weatherData.usersLocation = cityFromHistory;
    this.weatherData.getWeatherData();
    this.router.navigate(['/']);
  }


  deleteCityFromDb(documentID) {
    this.firestore
    .collection('citys')
    .doc(documentID)
    .delete()
  }

}
