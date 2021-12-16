import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

import * as wjCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-issue-info',
  templateUrl: './issue-info.component.html',
  styleUrls: ['./issue-info.component.css']
})
export class IssueInfoComponent implements OnInit, OnChanges {
  @Input('selectedCountryName') selectedCountryName: string;
  selectedCountryData: wjCore.CollectionView;
  issuesTooltip = 'Issues reported by system';

  constructor(private dataService: DataService) {
    this.selectedCountryData = new wjCore.CollectionView(dataService.getIssueData('United States'));
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.selectedCountryName.currentValue && this.dataService.isValidCountry(changes.selectedCountryName.currentValue)) {
      this.selectedCountryData = new wjCore.CollectionView(this.dataService.getIssueData(changes.selectedCountryName.currentValue));
    }
  }

  initializedGrid(grid: wjGrid.FlexGrid) {
    let toolTip = new wjCore.Tooltip();
    grid.formatItem.addHandler((s: wjGrid.FlexGrid, e: wjGrid.FormatItemEventArgs) => {
      if(e.panel == s.cells) {
        let item = s.rows[e.row].dataItem, binding = s.columns[e.col].binding, note = item.message;
        if(e.col == 1) {
          wjCore.toggleClass(e.cell, 'wj-has-notes', true);
          toolTip.setTooltip(e.cell, '<b>Error:</b><br/>' + note);
        }
      }
    });
    grid.updatingView.addHandler(() => {
      toolTip.dispose();
    });
  }

}
