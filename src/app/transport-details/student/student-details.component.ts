import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SocketService } from '../../socket.service';
import { StudentData } from '../transport';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-transport-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'class', 'stop', 'school'];
  dataSource: MatTableDataSource<StudentData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private socketService: SocketService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.studentDetails();
  }

  studentDetails(){
    let records = this.socketService.getAllStudents();
    records.subscribe(res => {
      // console.log(res);
      // this.dataSource = res;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  addStudent(){
    const dialogRef = this.dialog.open(StudentCreateComponent,{
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(()=> this.studentDetails());
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
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit{

  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<StudentDetailsComponent>,
    private socketService: SocketService){
  this.createForm = this.fb.group({
    name: ['', Validators.required],
    class: ['', Validators.required],
    school: ['', Validators.required],
    stop: ['', Validators.required]
  });
  }

  ngOnInit(){
  }

  createStudent(value){
    console.log(value);

    this.socketService.addStudent(value).subscribe(res => {
      console.log(res);
      if(res){
        this.dialogRef.close();
      }
    });

  }


  closeDialog(){
    this.dialogRef.close();
  }


}
