import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-session-info',
  templateUrl: './session-info.component.html',
  styleUrls: ['./session-info.component.css']
})
export class SessionInfoComponent implements OnInit {
  data: any[];
  sessionTooltip = 'User sessions breakdown.';
  pageViews = { value: 3.54, change: '12.26%' };
  sessions = { value: '4m 41s', change: '9.38%' };
  totalSessions = '111.9k';

  constructor(private dataService: DataService) {
    this.data = dataService.getSessionData();
  }

  ngOnInit(): void {
  }

}
