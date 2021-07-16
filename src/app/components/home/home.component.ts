import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../common/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  weatherDataArray: Array<any> = [];
  ngOnInit() {
    this.weatherService.loadWeatherData().subscribe(
      (res: any) => {
        if (res.cod == 200) {
          this.weatherDataArray = res.list;
          console.log('res', this.weatherDataArray);
        }
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }
  clickMe() {
    alert('Bootstap working');
  }
}
