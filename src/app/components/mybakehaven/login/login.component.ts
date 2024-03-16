import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted:boolean=false;

  constructor(private formBuilder: FormBuilder, private router:Router){
    this.loginForm= this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
  }
  ngOnInit(): void {
    
  }

  onLogin(){
    this.submitted=true;
    if(this.loginForm.valid){
      const formData=this.loginForm.value;
      console.log("formData", formData);
      this.loginForm.reset()
    }else{
      return;
    }
    this.submitted=false
  }

  goToSignup(){
    this.router.navigate(['/signup'])
  }

}
