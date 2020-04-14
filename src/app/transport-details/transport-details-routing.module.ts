import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleDetailsComponent } from './vehicle/vehicle-details.component';
import { StudentDetailsComponent } from './student/student-details.component';
import { DriverDetailsComponent } from './driver/driver-details.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'TransportDetails'
    },
    children: [
      {
        path: '',
        redirectTo: 'vehicleDetails'
      },
      {
        path: 'vehicleDetails',
        component:  VehicleDetailsComponent,
        data: {
          title: 'VehicleDetails'
        }
      },
      {
        path: 'studentDetails',
        component:  StudentDetailsComponent,
        data: {
          title: 'ChildDetails'
        }
      },
      // {
      //   path: 'parentDetails',
      //   component:  VehicleDetailsComponent,
      //   data: {
      //     title: 'ParentDetails'
      //   }
      // },
      {
        path: 'driverDetails',
        component:  DriverDetailsComponent,
        data: {
          title: 'DriverDetails'
        }
      },
    ]
  }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class TransportDetailsRoutingModule {}
