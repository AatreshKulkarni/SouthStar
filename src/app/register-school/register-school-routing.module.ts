import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterSchoolComponent } from './register-school.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterSchoolComponent,
    data: {
      title: 'Map'
    }
  }
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class RegisterSchoolRoutingModule {}
