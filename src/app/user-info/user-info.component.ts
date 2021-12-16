import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

import * as wjCore from '@grapecity/wijmo';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit, OnChanges {
  @Input('selectedCountryName') selectedCountryName: string;
  selectedCountryData: wjCore.CollectionView;
  usersTooltip = 'Information on the last 200 users from selected country.';

  constructor(private dataService: DataService) {
    this.selectedCountryData = new wjCore.CollectionView(dataService.getCountryInfo('United States'), {
      pageSize: 25
    })
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.selectedCountryName.currentValue && this.dataService.isValidCountry(changes.selectedCountryName.currentValue)) {
      this.selectedCountryData = new wjCore.CollectionView(this.dataService.getCountryInfo(changes.selectedCountryName.currentValue), {
        pageSize: 25
      });
    }
  }

}
