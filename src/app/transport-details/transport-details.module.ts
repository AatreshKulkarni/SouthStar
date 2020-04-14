import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ChartsModule } from 'ng2-charts';

import { VehicleDetailsComponent, VehicleCreateComponent } from './vehicle/vehicle-details.component';
import { DriverDetailsComponent, DriverCreateComponent } from './driver/driver-details.component';
import { StudentDetailsComponent, StudentCreateComponent } from './student/student-details.component';

import { TransportDetailsRoutingModule } from './transport-details-routing.module';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TransportDetailsRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    VehicleDetailsComponent,
    DriverDetailsComponent,
    StudentDetailsComponent,
    VehicleCreateComponent,
    StudentCreateComponent,
    DriverCreateComponent
  ],
  entryComponents: [VehicleCreateComponent, StudentCreateComponent, DriverCreateComponent]
})
export class TransportDetailsModule { }
