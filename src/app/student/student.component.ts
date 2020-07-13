import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { SocketService } from "../services/socket.service";

import { StudentData } from "./student";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { MatDialogRef, MatDialog } from "@angular/material/dialog";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"],
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = [
    "student_name",
    "class",
    "stop_id",
    "parent_1",
    "parent_1_mobile",
    "parent_1_email",
    "parent_2",
    "parent_2_mobile",
    "parent_2_email",
  ];
  dataSource: MatTableDataSource<StudentData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private socketService: SocketService,
    private router: Router,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.studentDetails();
  }

  studentDetails() {
    let records = this.socketService.getAllStudents();
    records.subscribe((res) => {
      // console.log(res);
      // this.dataSource = res;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  addStudent() {
    // const dialogRef = this.dialog.open(StudentCreateComponent, {
    //   width: "auto",
    // });
    console.log(this.router);
    // dialogRef.afterClosed().subscribe(() => this.studentDetails());
    this.router.navigate(["add"], {
      relativeTo: this.activatedRoute,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

@Component({
  templateUrl: "./student-create.component.html",
  styleUrls: ["./student-create.component.css"],
})
export class StudentCreateComponent implements OnInit {
  submitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private socketService: SocketService
  ) {}

  parentType: any = ["Primary", "Secondary"];

  registerStudentForm: FormGroup = this.fb.group({
    student: this.fb.array([this.addStudentFormGroup()]),
    parent: this.fb.array([this.addParentFormGroup()]),
  });

  onAddStudentButtonClick() {
    (<FormArray>this.registerStudentForm.get("student")).push(
      this.addStudentFormGroup()
    );
  }

  onAddParentButtonClick() {
    (<FormArray>this.registerStudentForm.get("parent")).push(
      this.addStudentFormGroup()
    );
  }

  addParentFormGroup() {
    return this.fb.group({
      parent_name: ["", Validators.required],
      parent_number: [
        "",
        [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      ],
      email_id: ["", [Validators.required, Validators.email]],
      parent_type: ["Primary", Validators.required],
    });
  }

  addStudentFormGroup() {
    return this.fb.group({
      student_name: ["", Validators.required],
      class: ["", Validators.required],
      stop_id: ["", Validators.required],
      joining_date: ["", Validators.required],
      home_latitude: ["", Validators.required],
      home_longitude: ["", Validators.required],
    });
  }

  ngOnInit() {}

  createStudent(value) {
    this.submitted = true;
    console.log(value);
    //this.router.navigate(["student"]);
    // console.log(value);
    // this.socketService.addStudent(value).subscribe((res) => {
    //   console.log(res);
    //   if (res) {
    //     this.dialogRef.close();
    //   }
    // });
  }

  closeDialog() {
    // this.dialogRef.close();
  }
}
