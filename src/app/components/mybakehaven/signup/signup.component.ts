import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupForm: FormGroup;
  submitted:boolean=false;

  constructor(private formBuilder: FormBuilder, private router:Router){
    this.signupForm=this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      password: ['', [Validators.required, Validators.min(5), Validators.maxLength(10)]]
    })
  }

  ngOnInit(): void {
    
  }
  onSignup(){
    this.submitted=true;
    if(this.signupForm.valid){
      const formdata=this.signupForm.value;
      this.router.navigate(['/login'])
      console.log("signup data", formdata)
    }
  }

  goToLoginPage(){
  this.router.navigate(['/login'])
  }

}
