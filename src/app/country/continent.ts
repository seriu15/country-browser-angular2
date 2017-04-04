import {Country} from "./countries";

export class Continent {
  constructor(public id: number, public name: string, public countries: Country[]){}
}
