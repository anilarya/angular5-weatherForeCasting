import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule, Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Routes, RouterModule } from "@angular/router";
import 'rxjs/Rx';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; 
import { UtilityService } from './utility.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ UtilityService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
