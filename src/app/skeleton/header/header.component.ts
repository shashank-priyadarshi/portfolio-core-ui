import { Component, OnInit } from '@angular/core';
import { Biodata } from 'src/assets/models/models.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  headerDetails!: string;
  name!: string;

  constructor() {}

  ngOnInit(): void {
    let biodataString = localStorage.getItem('biodata');
    let biodata: Biodata;
    if (biodataString) {
      biodata = JSON.parse(biodataString) as Biodata;
    } else {
      this.name = 'UNDEFINED';
      this.headerDetails = 'Asuvidha ke liye khed hai!';
      return;
    }
    this.fetchDetails(biodata);
  }

  calculateExperience(dojdata: string) {
    return new Date().getTime() - new Date(dojdata).getTime();
  }

  fetchDetails(biodata: Biodata) {
    this.name = biodata.name;
    this.headerDetails =
      biodata.role +
      ' | ' +
      biodata.position +
      ' | ' +
      (this.calculateExperience(biodata.doj) / 31557600000).toFixed(2) +
      ' years';
  }
}
