import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
  providers: [DatePipe]
})

export class MainScreenComponent implements OnInit {

  currentDate = new Date();
  formattedDate = this.datePipe.transform(this.currentDate, 'EEE d. MMMM');

  constructor(public weatherData: WeatherDataService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    if(this.weatherData.location >= 1) {
      return
    } else {
      this.weatherData.getWeatherData('Stuttgart');
    }
  }

  roundDecimal(decimal) {
    return Math.round(decimal);
  }

  
}
