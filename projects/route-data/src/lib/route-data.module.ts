import { NgModule } from '@angular/core';
import { RouteDataComponent } from './route-data.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RouteDataComponent],
  imports: [HttpClientModule],
  exports: [RouteDataComponent],
})
export class RouteDataModule {}
