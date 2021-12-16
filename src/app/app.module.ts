import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WjCoreModule } from '@grapecity/wijmo.angular2.core';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart';
import { WjChartMapModule } from '@grapecity/wijmo.angular2.chart.map';
import { WjGaugeModule } from '@grapecity/wijmo.angular2.gauge';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { CurrentInfoComponent } from './current-info/current-info.component';
import { SessionInfoComponent } from './session-info/session-info.component';
import { MapInfoComponent } from './map-info/map-info.component';
import { TopCountryInfoComponent } from './top-country-info/top-country-info.component';
import { TopPlatformInfoComponent } from './top-platform-info/top-platform-info.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { TopBrowserComponent } from './top-browser/top-browser.component';
import { IssueInfoComponent } from './issue-info/issue-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentInfoComponent,
    SessionInfoComponent,
    MapInfoComponent,
    TopCountryInfoComponent,
    TopPlatformInfoComponent,
    UserInfoComponent,
    TopBrowserComponent,
    IssueInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WjCoreModule,
    WjGridModule,
    WjChartModule,
    WjChartMapModule,
    WjGaugeModule,
    WjInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
