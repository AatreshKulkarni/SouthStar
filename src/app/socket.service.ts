import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { VehicleData, StudentData, DriverData } from './transport-details/transport';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SocketService {

 // url: string = "http://mybackend.com/api/";
  uri: any = "http://localhost:3000/gps_data";
  constructor(private http: HttpClient) { }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

  getAllMarkers(): Observable<any>{
    console.log("Hello World");
    return this.http.get<any>(this.uri );
  }

  // getAllVehicles(): Observable<any>{
  //   // return this.http.get<VehicleData[]>('assets/vehicle.json').pipe(
  //   //   catchError(this.handleError<VehicleData[]>('getAllVehicles', [])));
  //   return this.http.get<any>(this.url + 'vehicleData');
  // }

  // getAllStudents(): Observable<any>{
  //   // return this.http.get<StudentData[]>('assets/student.json').pipe(
  //   //   catchError(this.handleError<StudentData[]>('getAllStudents', [])));
  //   return this.http.get<any>(this.url + 'studentData');
  // }

  // getAllDrivers(): Observable<any> {
  //   // return this.http.get<DriverData[]>('assets/driver.json').pipe(
  //   //   catchError(this.handleError<DriverData[]>('getAllDrivers', [])));
  //   return this.http.get<any>(this.url + 'driverData')
  // }

  // addVehicle(vehData):Observable<any>{
  //   return this.http.post<VehicleData[]>(this.url + 'vehicleData', vehData).pipe(
  //     catchError(this.handleError<VehicleData[]>('addVehicle', [])));
  // //  return this.http.post<any>(this.url + 'vehicleData', vehData);
  // }
  // addStudent(studData):Observable<any>{
  //   return this.http.post<StudentData[]>(this.url + 'studentData', studData).pipe(
  //     catchError(this.handleError<StudentData[]>('addStudent', [])));
  // //  return this.http.post<any>(this.url + 'vehicleData', vehData);
  // }
  // addDriver(driverData):Observable<any>{
  //   return this.http.post<DriverData[]>(this.url + 'driverData', driverData).pipe(
  //     catchError(this.handleError<DriverData[]>('addDriver', [])));
  // //  return this.http.post<any>(this.url + 'vehicleData', vehData);
  // }
}
