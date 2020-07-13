import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpResponse } from "@angular/common/http";
import {
  VehicleData,
  StudentData,
  DriverData,
} from "../transport-details/transport";
import { catchError } from "rxjs/operators";

import * as io from "socket.io-client";

@Injectable({
  providedIn: "root",
})
export class SocketService {
  socket: any;
  url: any = "http://cosmosnodeapi.azurewebsites.net/school/Device/school_id/";
  uri: any = "http://localhost:80/";

  constructor(private http: HttpClient) {
    // this.socket = io(this.uri);
  }

  // Getting GPS Data from Node
  getGPSData(): Observable<any> {
    return Observable.create((observer) => [
      this.socket.on("mobileChat", (data) => {
        observer.next(data);
      }),
    ]);
  }

  sendMessage(message) {
    this.socket.emit("mobileUser", message);
  }

  getDeviceIDsOfSchool(id): Observable<any> {
    return this.http.get<any>(this.url + id);
  }

  getDeviceGPSData(): Observable<any> {
    return this.http.get<any>("assets/device.json");
  }

  getDevicesData(dataArray) {
    console.log(dataArray);
    // return this.http.post<any>('assets/device.json', dataArray);
  }

  getRouteDetails(data): Observable<any> {
    return this.http.post<any>(this.uri + "routeDetails", data);
  }

  registerSchool(data): Observable<any> {
    return this.http.post<any>(this.uri + "addSchoolDetails2", data);
  }

  //  Need to implement these APIs
  getAllVehicles(): Observable<any> {
    // return this.http.get<VehicleData[]>('assets/vehicle.json').pipe(
    //   catchError(this.handleError<VehicleData[]>('getAllVehicles', [])));
    return; // this.http.get<any>(this.url + 'vehicleData');
  }

  getAllStudents(): Observable<any> {
    // return this.http.get<StudentData[]>('assets/student.json').pipe(
    //   catchError(this.handleError<StudentData[]>('getAllStudents', [])));
    return; // this.http.get<any>(this.url + 'studentData');
  }

  getAllDrivers(): Observable<any> {
    // return this.http.get<DriverData[]>('assets/driver.json').pipe(
    //   catchError(this.handleError<DriverData[]>('getAllDrivers', [])));
    return; // this.http.get<any>(this.url + 'driverData')
  }

  addVehicle(vehData): Observable<any> {
    return; // this.http.post<VehicleData[]>(this.url + 'vehicleData', vehData).pipe(
    //   catchError(this.handleError<VehicleData[]>('addVehicle', [])));
    //  return this.http.post<any>(this.url + 'vehicleData', vehData);
  }
  addStudent(studData): Observable<any> {
    return; // this.http.post<StudentData[]>(this.url + 'studentData', studData).pipe(
    // catchError(this.handleError<StudentData[]>('addStudent', [])));
    //  return this.http.post<any>(this.url + 'vehicleData', vehData);
  }
  addDriver(driverData): Observable<any> {
    return; // this.http.post<DriverData[]>(this.url + 'driverData', driverData).pipe(
    // catchError(this.handleError<DriverData[]>('addDriver', [])));
    //  return this.http.post<any>(this.url + 'vehicleData', vehData);
  }
}
