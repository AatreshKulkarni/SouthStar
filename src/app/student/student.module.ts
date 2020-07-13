import { NgModule } from '@angular/core';
//import { ChartsModule } from 'ng2-charts';
import { StudentComponent, StudentCreateComponent } from './student.component';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModules } from '../shared.module';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    StudentRoutingModule,
    SharedModules,
    MaterialModule
  ],
  declarations: [ StudentComponent, StudentCreateComponent ],
  entryComponents: [StudentCreateComponent]
})
export class StudentModule { }
