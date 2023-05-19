import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

    // API-CALL:

    let headers = new HttpHeaders({
      'X-RapidAPI-Key': 'fd5c96f098msh7284ebaad2d33ffp1a3db6jsneca51da7a76c',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    });

    this.http
    .get('https://open-weather13.p.rapidapi.com/city/Ludwigsburg', {headers: headers})
    .subscribe(weatherData => {
      console.log(weatherData);
    })
  }
}
