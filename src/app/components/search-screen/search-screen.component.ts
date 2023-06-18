import { Component } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.scss']
})
export class SearchScreenComponent {

  constructor(public weatherData: WeatherDataService, private router: Router, public weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
  }

  searchLocation(location) {
    this.weatherData.getWeatherData(location);
    this.router.navigate(['/']);
    console.log(this.weatherDataService.location);
    this.weatherDataService.allLocations.push(this.weatherDataService.location);
    console.log('All Locations:', this.weatherDataService.allLocations)
  }
}
