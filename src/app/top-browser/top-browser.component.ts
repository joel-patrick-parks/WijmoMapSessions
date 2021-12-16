import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import * as wjChart from '@grapecity/wijmo.chart';

@Component({
  selector: 'app-top-browser',
  templateUrl: './top-browser.component.html',
  styleUrls: ['./top-browser.component.css']
})
export class TopBrowserComponent implements OnInit {
  loadTimeData: any[];
  sessionData: any[];
  browserTooltip = 'Breakdown of sessions by browser.';
  palette = wjChart.Palettes.darkly;

  constructor(private dataService: DataService) {
    this.loadTimeData = dataService.getBrowserLoadTimeData();
    this.sessionData = dataService.getBrowserSessionData();
  }

  ngOnInit(): void {
  }

}
