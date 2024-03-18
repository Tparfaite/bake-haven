import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupForm: FormGroup;
  submitted:boolean=false;

  constructor(private formBuilder: FormBuilder, private router:Router, private authService:AuthService){
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
      this.authService.createUser(formdata).subscribe({
        next:(response=>{
          console.log(response)
        }),error:(error=>{
          console.log('error',error)
        })

      })
      this.router.navigate(['/login'])
      console.log("signup data", formdata)
    }
  }

  goToLoginPage(){
  this.router.navigate(['/login'])
  }

}
