import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'cb-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  continents: any[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  constructor() { }

  ngOnInit() {
  }
}
