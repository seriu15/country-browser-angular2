import { Component } from '@angular/core';
import {CountryService} from "./country/country.service";

@Component({
  selector: 'cb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountryService]
})
export class AppComponent {
}
