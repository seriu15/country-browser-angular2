import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { CountryComponent } from './country/country.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import {CountryService} from "./country/country.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CountryComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
