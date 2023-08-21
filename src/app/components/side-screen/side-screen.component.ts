import { Component } from '@angular/core';
import { WeatherDataService } from 'src/app/services/weather-data.service';

@Component({
  selector: 'app-side-screen',
  templateUrl: './side-screen.component.html',
  styleUrls: ['./side-screen.component.scss']
})
export class SideScreenComponent {

  constructor(public weatherData: WeatherDataService) {}

}
