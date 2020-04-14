import { NgModule } from '@angular/core';
//import { ChartsModule } from 'ng2-charts';

import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';

@NgModule({
  imports: [
  // ChartJSRoutingModule,
  //  ChartsModule
  MapRoutingModule
  ],
  declarations: [ MapComponent ]
})
export class MapModule { }
