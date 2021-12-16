import { Component, OnInit, ViewChild } from '@angular/core';

import { Palettes } from "@grapecity/wijmo.chart";
import { FlexMap } from '@grapecity/wijmo.chart.map';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Wijmo LiveMap';
  selectedCountryName: string;

  constructor(){}
  
  ngOnInit() {}

  countryName(e: any) {
    this.selectedCountryName = e;
  }
}

