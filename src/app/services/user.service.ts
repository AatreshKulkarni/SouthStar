import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  url = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  login(user) {
    console.log(user);
    return this.http.post(this.url + 'logInAdmin', user)
    .pipe(map(res => {

     // localStorage.setItem('user', JSON.stringify(res));
    // localStorage.setItem('user', res['token'])
     return res;
    }));
  }

// Function to logout
  logout() {
    // this.authToken = null; // Set token to null
    // this.user = null; // Set user to null
    localStorage.removeItem('user'); // Clear local storage
  }

  forgotPassword(data){
    return this.http.post(this.url + `forgotPassword`, data)

  }

  verifyUser(data): Observable < any > {
    return this.http.post(this.url + 'verifyUser', data)
  }

  resetPassword(id, data){
    return this.http.post(this.url + `resetPassword/${id}`, data)
  }
}


