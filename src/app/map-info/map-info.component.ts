import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

import { Palettes } from "@grapecity/wijmo.chart";
import { FlexMap } from '@grapecity/wijmo.chart.map';
import { DataService } from '../data.service';

@Component({
  selector: 'app-map-info',
  templateUrl: './map-info.component.html',
  styleUrls: ['./map-info.component.css']
})
export class MapInfoComponent implements OnInit {
  @ViewChild('flexMap') flexMap: FlexMap;
  @Output() countryName = new EventEmitter<string>();
  flexMapData: any;
  dataMap = new Map();
  pageViewMap = new Map();
  issuesReportedMap = new Map();
  colors = Palettes.Diverging.RdYlGn;
  binding = (o: any) => this.dataMap.get(o.properties.name);
  scale = (v: number) => 1 - v;

  constructor(private dataService: DataService){}
  
  ngOnInit() {
    this.flexMapData = this.dataService.getCountryData();
    Array.prototype.forEach.call(this.flexMapData, el => {
      this.dataMap.set(el.Country, parseFloat(el.AverageResponseTime));
      this.pageViewMap.set(el.Country, el.PageViews);
      this.issuesReportedMap.set(el.Country, parseInt(el.IssuesReported));
    });
  }

  initializeMap(layer: any) {
    this.flexMap.zoomTo(layer.getGeoBBox());
    this.flexMap.hostElement.addEventListener('mousedown', (e) => {
      var hitTestInfo = this.flexMap.hitTest(e);
      if(hitTestInfo._item !== undefined) {
        this.emitCountryName(hitTestInfo._item.name);
      }
    });
  }

  emitCountryName(value: string) {
    this.countryName.emit(value);
  }

  getCountryToolTip(val: any): string {
    if(this.dataService.isValidCountry(val.name)) {
      return `<b>` + val.name + `</b><br>` + 'Average Response Time: ' + this.dataMap.get(val.name) + 's' + `<br>` + 'Page Views: ' + this.pageViewMap.get(val.name) + `<br>` + 'Issues Reported: ' + this.issuesReportedMap.get(val.name);
    }
    return `<b>` + val.name + `</b><br>` + 'No data available';
  }

  tooltipContent = (f: any) => this.getCountryToolTip(f);

}
