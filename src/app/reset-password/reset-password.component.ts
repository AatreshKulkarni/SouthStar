import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit{


  message;
  processing = false;
  responseResetForm: FormGroup;
  previousUrl;
  currentState: any;
  uniqueId: any;
  errorMessage: string;
  successMessage: string;
  IsResetFormValid = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  //  private authGuard: AuthGuard
  ) {

    this.currentState = 'Wait';
    this.route.params.subscribe(params => {
      this.uniqueId = params.id;
      console.log(this.uniqueId);
      this.verifyId();
    });
    // Create Login Form when component is constructed
  }

  verifyId(){
    this.authService.verifyUser({ id: this.uniqueId}).subscribe(
      result => {
        if(result.status == 200)
        this.currentState = 'Verified';
        else{
          this.currentState = 'Not Verified';
        }
      },

    );
  }

  status: boolean;
  ngOnInit(){
    // this.authService.verifyUser({id: this.route.snapshot.params.id}).subscribe(result => {
    //   if(result.status == '200'){
    //     console.log("Hello World")
    //     this.status = true;
    //   }
    //   else{
    //     console.log(result);
    //     this.router.navigateByUrl('404');
    //   }

    // })
    // this.Init();
    this.createForm();
  }

  // Function to create login form
  createForm() {
    this.responseResetForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  Validate(passwordFormGroup: FormGroup) {
    const new_password = passwordFormGroup.controls.newPassword.value;
    const confirm_password = passwordFormGroup.controls.confirmPassword.value;

    if (confirm_password.length <= 0) {
      return null;
    }

    if (confirm_password !== new_password) {
      return {
        doesNotMatch: true
      };
    }

    return null;
  }




  // Functiont to submit form and login user
  resetPassword(form) {

    if(form.valid){

    this.IsResetFormValid = true;
    console.log(this.responseResetForm.value)
    const user = {
      password: this.responseResetForm.get('newPassword').value, // Username input field
    };

    // let id = this.route.snapshot.params.id;
    // console.log(id);
   // Function to send login data to API
    this.authService.resetPassword(this.uniqueId.id, user).subscribe((data: any) => {
      console.log(data);
      if(data.status === 200){
        this.message = data.message
        setTimeout(() => {
          this.router.navigateByUrl('/login'); // Navigate to dashboard view
        }, 200);
      }


      // this.enableForm()
    });
    }else{
      this.IsResetFormValid = false;
    }

  }




}
