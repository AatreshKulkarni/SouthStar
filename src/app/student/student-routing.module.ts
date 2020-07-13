import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StudentComponent, StudentCreateComponent } from "./student.component";

const routes: Routes = [
  {
    path: "",

    children: [
      {
        path: "",
        redirectTo: "student",
      },
      {
        path: "",
        component: StudentComponent,
      },
      {
        path: "add",
        component: StudentCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
