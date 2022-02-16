import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  countryData = [
    { "Country": "United States", "AverageResponseTime": "1.2000", "PageViews": "21.9k", "IssuesReported": "72" },
    { "Country": "Canada", "AverageResponseTime": "1.4250", "PageViews": "12.7k", "IssuesReported": "35" },
    { "Country": "Mexico", "AverageResponseTime": "1.5500", "PageViews": "4.2k", "IssuesReported": "24" },
    { "Country": "Brazil", "AverageResponseTime": "2.6505", "PageViews": "1.3k", "IssuesReported": "7" },
    { "Country": "Peru", "AverageResponseTime": "3.2400", "PageViews": "0.8k", "IssuesReported": "2" },
    { "Country": "United Kingdom", "AverageResponseTime": "1.7500", "PageViews": "7.9k", "IssuesReported": "29" },
    { "Country": "France", "AverageResponseTime": "1.9000", "PageViews": "3.4k", "IssuesReported": "19" },
    { "Country": "Germany", "AverageResponseTime": "2.1000", "PageViews": "5.6k", "IssuesReported": "15" },
    { "Country": "Spain", "AverageResponseTime": "2.2500", "PageViews": "2.3k", "IssuesReported": "9" },
    { "Country": "Italy", "AverageResponseTime": "2.3500", "PageViews": "1.9k", "IssuesReported": "6" },
    { "Country": "Netherlands", "AverageResponseTime": "1.9250", "PageViews": "0.9k", "IssuesReported": "4" },
    { "Country": "Finland", "AverageResponseTime": "2.0150", "PageViews": "1.1k", "IssuesReported": "7" },
    { "Country": "Denmark", "AverageResponseTime": "3.5025", "PageViews": "1.8k", "IssuesReported": "9" },
    { "Country": "Norway", "AverageResponseTime": "2.7500", "PageViews": "2.1k", "IssuesReported": "14" },
    { "Country": "Poland", "AverageResponseTime": "3.4000", "PageViews": "0.3k", "IssuesReported": "3" },
    { "Country": "Russia", "AverageResponseTime": "2.2250", "PageViews": "5.9k", "IssuesReported": "11" },
    { "Country": "Ukraine", "AverageResponseTime": "3.2500", "PageViews": "3.1k", "IssuesReported": "8" },
    { "Country": "China", "AverageResponseTime": "2.7000", "PageViews": "11.3k", "IssuesReported": "18" },
    { "Country": "Japan", "AverageResponseTime": "2.3000", "PageViews": "13.8k", "IssuesReported": "17" },
    { "Country": "Australia", "AverageResponseTime": "3.1000", "PageViews": "2.4k", "IssuesReported": "7" },
  ];

  reportedIssues = [
    { country: 'United States', issuesReported: 72 },
    { country: 'Canada', issuesReported: 35 },
    { country: 'Mexico', issuesReported: 24 },
    { country: 'Brazil', issuesReported: 7 },
    { country: 'Peru', issuesReported: 2 },
    { country: 'United Kingdom', issuesReported: 29 },
    { country: 'France', issuesReported: 19 },
    { country: 'Germany', issuesReported: 15 },
    { country: 'Spain', issuesReported: 9 },
    { country: 'Italy', issuesReported: 6 },
    { country: 'Netherlands', issuesReported: 4 },
    { country: 'Finland', issuesReported: 7 },
    { country: 'Denmark', issuesReported: 9 },
    { country: 'Norway', issuesReported: 14 },
    { country: 'Poland', issuesReported: 3 },
    { country: 'Russia', issuesReported: 11 },
    { country: 'Ukraine', issuesReported: 8 },
    { country: 'China', issuesReported: 18 },
    { country: 'Japan', issuesReported: 17 },
    { country: 'Australia', issuesReported: 7 },
  ]

  sessionData = [
    { sessions: 'New Users', number: 49120 },
    { sessions: 'Returning Users', number: 62780 }
  ]

  platformLoadTimeData = [
    { platform: 'Desktop', prevMonth: 1.58, curMonth: 1.49 },
    { platform: 'Phone', prevMonth: 2.01, curMonth: 1.96 },
    { platform: 'Tablet', prevMonth: 2.16, curMonth: 2.41 },
    { platform: 'Other', prevMonth: 2.53, curMonth: 2.65 }
  ];

  platformSessionData = [
    { platform: 'Desktop', sessions: 68379 },
    { platform: 'Phone', sessions: 21478 },
    { platform: 'Tablet', sessions: 14523 },
    { platform: 'Other', sessions: 7520 }
  ];

  browserLoadTimeData = [
    { browser: 'Chrome', prevMonth: 1.68, curMonth: 1.52 },
    { browser: 'Firefox', prevMonth: 1.93, curMonth: 1.71 },
    { browser: 'Edge', prevMonth: 2.25, curMonth: 2.38 },
    { browser: 'Safari', prevMonth: 2.11, curMonth: 2.03 },
    { browser: 'Other', prevMonth: 2.56, curMonth: 2.49 }
  ];

  browserSessionData = [
    { browser: 'Chrome', sessions: 34520 },
    { browser: 'Firefox', sessions: 29586 },
    { browser: 'Edge', sessions: 13793 },
    { browser: 'Safari', sessions: 22136 },
    { browser: 'Other', sessions: 11865 }
  ];

  constructor() { }

  getCountryData() {
    return this.countryData;
  }

  getSessionData() {
    return this.sessionData;
  }

  getPlatformLoadTimeData() {
    return this.platformLoadTimeData;
  }

  getPlatformSessionData() {
    return this.platformSessionData;
  }

  getBrowserLoadTimeData() {
    return this.browserLoadTimeData;
  }

  getBrowserSessionData() {
    return this.browserSessionData;
  }

  getCountryInfo(country: string) {
    var data = [], platforms = ['Desktop', 'Mobile', 'Tablet', 'Other'], browsers = ['Chrome', 'Firefox', 'Edge', 'Safari', 'Other'];
    for(var i = 0; i < 200; i++) {
      data.push({
        country: country,
        sessionDuration: Math.round(Math.random() * 7) + 'm ' + Math.round(Math.random() * 60) + 's',
        ipAddress: Math.round(Math.random() * (999 - 1) + 1) + '.' + Math.round(Math.random() * (999 - 1) + 1) + '.' + Math.round(Math.random() * (999 - 1) + 1) + '.' + Math.round(Math.random() * (999 - 1) + 1),
        platform: platforms[Math.round(Math.random() * (3))],
        browser: browsers[Math.round(Math.random() * (4))]
      });
    }
    return data;
  }

  getIssueData(country: string) {
    var issues = [
      { issue: '500 Internal Server Error', status: 'High', message: 'General purpose error: potential server overload' },
      { issue: '400 Bad Request', status: 'High', message: 'Browser error: corrupted request' },
      { issue: '408 Request Time-Out', status: 'High', message: 'Slow response time: check server request' },
      { issue: '403 Forbidden', status: 'Moderate', message: 'Refused access: user attempted to access forbidden directory' },
      { issue: '501 Not Implemented', status: 'Moderate', message: 'Request refused: unsupported browser feature' },
      { issue: '401 Unauthorised', status: 'Low', message: 'Login failed: user does not have access' },
      { issue: '404 Not Found', status: 'Low', message: 'Page not returned: check status of requested page' },
    ], data = [];
    for(var i = 0; i < this.reportedIssues.length; i++) {
      if(this.reportedIssues[i].country == country) {
        for(var j = 0; j < this.reportedIssues[i].issuesReported; j++) {
          var selector = Math.round(Math.random() * (6));
          data.push({
            country: country,
            issue: issues[selector].issue,
            status: issues[selector].status,
            message: issues[selector].message
          });
        }
        break;
      }
    }
    return data;
  }

  isValidCountry(countryName: string): boolean {
    for(var i = 0; i < this.countryData.length; i++) {
      if(this.countryData[i].Country == countryName) {
        return true;
      }
    }
    return false;
  }
}
