import { NgModule } from "@angular/core";
//import { ChartsModule } from 'ng2-charts';

import { RegisterSchoolComponent } from "./register-school.component";
import { RegisterSchoolRoutingModule } from "./register-school-routing.module";
import { SharedModules } from "./../shared.module";
import { MaterialModule } from "../material.module";

@NgModule({
  imports: [
    // ChartJSRoutingModule,
    //  ChartsModule
    RegisterSchoolRoutingModule,
    SharedModules,
    MaterialModule,
  ],
  declarations: [RegisterSchoolComponent],
})
export class RegisterSchoolModule {}
