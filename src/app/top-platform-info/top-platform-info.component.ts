import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import * as wjChart from '@grapecity/wijmo.chart';

@Component({
  selector: 'app-top-platform-info',
  templateUrl: './top-platform-info.component.html',
  styleUrls: ['./top-platform-info.component.css']
})
export class TopPlatformInfoComponent implements OnInit {
  loadTimeData: any[];
  sessionData: any[];
  platformTooltip = 'Breakdown of sessions by platform.';
  palette = wjChart.Palettes.darkly;

  constructor(private dataService: DataService) {
    this.loadTimeData = dataService.getPlatformLoadTimeData();
    this.sessionData = dataService.getPlatformSessionData();
  }

  ngOnInit(): void {
  }

}
