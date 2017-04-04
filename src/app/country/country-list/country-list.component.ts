import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from "../country.service";

import { Country} from "../countries";

@Component({
  selector: 'cb-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  @Input() continent;
  @Input() continentId: number;
  items: Country[] = [];
  sort = [];
  toggle: boolean = false;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getAllData();
    for(let elem of this.continent){
      this.sort[elem] = "";
    }
  }

  sortThisBy(){
    this.items = this.items.slice().reverse();
  }

  getAllData(){
    this.countryService.getOwnData(this.continent)
      .subscribe(
        data => {
          const myArray = [];
          for(let key in data){
            myArray.push(new Country(Number(key), data[key].name, false));
          }
          this.items = myArray;
        }
      );
  }

  toggleAll() {
    this.toggle = !this.toggle
    this.items.forEach(item => item.selected = this.toggle)
  }

  checkBoxState() {
    if(this.items.every(_ => _.selected)) {
      this.toggle = true;
    } else if(!this.items.every(_ => _.selected)) {
      this.toggle = false;
    }
  }

}
