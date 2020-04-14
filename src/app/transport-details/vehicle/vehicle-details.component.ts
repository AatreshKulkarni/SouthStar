import { Component, OnInit, ViewChild } from '@angular/core';

import { SocketService } from '../../socket.service';
import { VehicleData } from '../transport';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-transport-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'capacity'];
  dataSource: MatTableDataSource<VehicleData[]>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private socketService: SocketService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.vehicleDetails();
  }

  vehicleDetails(){
    let records = this.socketService.getAllVehicles();
    records.subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  addAVehicle(){
    const dialogRef = this.dialog.open(VehicleCreateComponent, {
      width: '400px',

    });

    dialogRef.afterClosed().subscribe(() => {
      this.vehicleDetails();
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
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit{

  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<VehicleDetailsComponent>,
    private socketService: SocketService){
  this.createForm = this.fb.group({
    name: ['', Validators.required],
    capacity: ['', Validators.required]
  });
  }

  ngOnInit(){
  }

  createVehicle(value){
    console.log(value);
    let data = {
      "veh_name": value.name,
      "veh_capacity": value.capacity
    }
    this.socketService.addVehicle(data).subscribe(res => {
      if(res){
        this.dialogRef.close();
      }
    });

  }


  closeDialog(){
    this.dialogRef.close();
  }


}
