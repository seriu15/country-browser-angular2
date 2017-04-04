import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class CountryService {
  constructor(private http: Http) { }

  getOwnData(continent) {
    return this.http.get('https://restcountries.eu/rest/v2/region/' + continent)
      .map((response: Response) => response.json());
  }
}
