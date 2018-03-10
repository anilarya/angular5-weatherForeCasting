import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { UtilityService } from './utility.service';
import * as AppConst from './app.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  searchKey                   = 'Bangalore';
  searchMode                  = 'city_name';
  errorMessage  :String       = '';
  placeholder : String        = ''
  weatherForcaseDetails : any = [];
  longitude : number          = 0.0 ;
  latitude  : number          = 0.0 ;



  constructor(private http: Http, private Utility: UtilityService) {
  		 
  }

  onSelectSearchMode(_value){
    this.searchKey = '' 

    switch(_value) { 
       case 'city_id': { 
          this.placeholder = '<City Id>'
          break; 
       } 
       case  'zip_code': { 
          this.placeholder = '<Zip code>'
          break; 
       }
       case  'city_name': { 
          this.placeholder = '<City Name>'
          break; 
       } 
       default: { 
          //statements; 
          break; 
       } 
    } 
  }

  contructQParams(){
    let qParams = '';
    switch(this.searchMode) { 
       case 'city_id': { 
          qParams = `id=${this.searchKey}`
          break; 
       } 
       case  'zip_code': { 
          qParams = `zip=${this.searchKey}`
          break; 
       }
       case  'city_name': { 
          qParams = `q=${this.searchKey}`
          break; 
       } 
       case  'geo_ordinates': { 
          qParams = `lon=${this.longitude}&lat=${this.latitude}`
          break; 
       } 
       default: { 
          //statements; 
          break; 
       } 
    } 
  	return qParams;
  }

  getWeatherDetails(){
  	let qParams =   this.contructQParams(); 
    this.errorMessage = '';
  	let __URL = AppConst.BASE_URI + qParams  + `&appid=${AppConst.API_KEY}`; 
  	this.http.get(__URL).subscribe( 
           _res => { 
           		this.weatherForcaseDetails =  _res.json();
           		console.error(this.weatherForcaseDetails );
        	},
        	_msg => {this.weatherForcaseDetails = [] ; this.errorMessage = _msg._body }
        ); 
  }

  getTemperature(_temp :number ){
    return (_temp - 273.15).toFixed(2)

  }

  getIconImageUrl(iconName :any) {
      return (iconName ? AppConst.ICON_BASE_URL + iconName + '.png' : '');
  };

  ngOnInit() {
  	this.getWeatherDetails();
  }
}
