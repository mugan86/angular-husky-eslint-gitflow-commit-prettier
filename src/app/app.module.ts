import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteDataModule } from 'projects/route-data/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RouteDataModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
