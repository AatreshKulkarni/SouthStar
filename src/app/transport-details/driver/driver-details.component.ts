import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SocketService } from '../../socket.service';
import { DriverData } from '../transport';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transport-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'lic_number', 'mobile'];
  dataSource: MatTableDataSource<DriverData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private socketService: SocketService, public dialog: MatDialog) {
    this.driverDetails();
   }

  ngOnInit(): void {


  }

  driverDetails(){
    let records = this.socketService.getAllDrivers();
    records.subscribe(res => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  addADriver(){
    const dialogRef = this.dialog.open(DriverCreateComponent,{
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(() => this.driverDetails());
  }

  applyFilter(event: Event) {
    console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

@Component({
  templateUrl: './driver-create.component.html',
  styleUrls: ['./driver-create.component.css']
})
export class DriverCreateComponent implements OnInit{
  createForm: FormGroup;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<DriverDetailsComponent>,
    private sockectService: SocketService){
      this.createForm = this.fb.group({
        name: ['', Validators.required],
        lic_number: ['', Validators.required],
        mobile_number: ['', Validators.required]
      });
    }

    createDriver(value){
      this.sockectService.addDriver(value).subscribe(res => {
        if(res){
          this.dialogRef.close();
        }
      })
    }
  ngOnInit(){}

  closeDialog(){
    this.dialogRef.close();
  }

}
