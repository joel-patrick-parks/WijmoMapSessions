import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-info',
  templateUrl: './current-info.component.html',
  styleUrls: ['./current-info.component.css']
})
export class CurrentInfoComponent implements OnInit {
  activeSessionTooltip = 'Number of current active sessions.';
  loadTimeTooltip = 'Current average loadtime of the site.';
  apdexTooltip = 'Ratio of tolerating requests to total requests made.';
  bounceRateTooltip = 'Percentage of visitors who enter and then leave the site.';

  activeSession = { current: 112, previous: 148, change: '24.32%' };
  loadTime = { current: '2.08s', previous: '1.7s', change: '18.30%' };
  apdexScore = { current: '1.00', previous: '0.96', change: '4.17%' };
  bounceRate = { current: '10.2%', previous: '16.4%', change: '37.8%' }

  constructor() { }

  ngOnInit(): void {
  }

}
