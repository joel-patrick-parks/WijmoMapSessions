import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-country-info',
  templateUrl: './top-country-info.component.html',
  styleUrls: ['./top-country-info.component.css']
})
export class TopCountryInfoComponent implements OnInit {
  countryData = [
    { name: 'United States', visits: 21.9, percentage: 19.7 },
    { name: 'Japan', visits: 13.8, percentage: 12.4 },
    { name: 'Canada', visits: 12.7, percentage: 11.4 },
    { name: 'China', visits: 11.3, percentage: 10.2 },
    { name: 'United Kingdom', visits: 7.9, percentage: 7.1 },
    { name: 'Russia', visits: 5.9, percentage: 5.3 },
    { name: 'Germany', visits: 5.9, percentage: 5.3 },
    { name: 'Mexico', visits: 4.2, percentage: 3.8 },
    { name: 'France', visits: 3.4, percentage: 3.1 },
    { name: 'Ukraine', visits: 3.1, percentage: 2.8 },
    // { name: 'Australia', visits: 2.4, percentage: 2.2 },
    // { name: 'Spain', visits: 2.3, percentage: 2.1 },
    // { name: 'Norway', visits: 2.1, percentage: 1.9 },
    // { name: 'Italy', visits: 1.9, percentage: 1.7 },
    // { name: 'Denmark', visits: 1.8, percentage: 1.6 },
    // { name: 'Brazil', visits: 1.3, percentage: 1.2 },
    // { name: 'Finland', visits: 1.1, percentage: 1.0 },
    // { name: 'Netherlands', visits: 0.9, percentage: 0.8 },
    // { name: 'Peru', visits: 0.8, percentage: 0.7 },
    // { name: 'Poland', visits: 0.3, percentage: 0.3 },
  ];
  maxVisits = 21.9;
  countrySessionTooltip = 'Displays the top 10 countries by # of sessions.';

  constructor() { }

  ngOnInit(): void {
  }

}
