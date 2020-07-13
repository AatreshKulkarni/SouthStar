import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  messageClass;
  message;
  processing = false;
  form: FormGroup;
  previousUrl;

  constructor(
    private formBuilder: FormBuilder,
    private authService: UserService,
    private router: Router,
  //  private authGuard: AuthGuard
  ) {
    this.createForm(); // Create Login Form when component is constructed
  }

  // Function to create login form
  createForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]] // Username field
    });
  }

  // Function to disable form
  disableForm() {
    this.form.controls['email'].disable(); // Disable username field
  }

  // Function to enable form
  enableForm() {
    this.form.controls['email'].enable(); // Enable username field
  }

  infoMessage: any;
  // Functiont to submit form and login user
  onSubmit() {
    this.processing = true; // Used to submit button while is being processed
    this.disableForm(); // Disable form while being process
    // Create user object from user's input
    const user = {
      email: this.form.get('email').value, // Username input field
    };


    // Function to send login data to API
    this.authService.forgotPassword(user).subscribe((data: any) => {
        console.log(data);
        if(data.status === 200){
          this.infoMessage=data.message;
        }
    });
  }

  ngOnInit() {

  }


}
