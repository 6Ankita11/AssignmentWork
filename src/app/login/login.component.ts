import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted= false;
  constructor(private spinner: NgxSpinnerService,private authService: AuthService,private formBuilder: FormBuilder,  private router: Router) {
  }
  get f() { return this.loginForm.controls; }
  ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [  '', [
        Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}') ]  ]
    })
  }
  onSubmit() {
    console.log(this.loginForm.value);
    this.submitted = true;
    if(this.loginForm.invalid){
      this.spinner.hide();
      return;
    } 
    if(this.loginForm.value){
      this.spinner.show();
      this.authService.login(this.loginForm.value);
      this.spinner.hide();
    }
    
    this.router.navigate(['/admin'])
  }

}
