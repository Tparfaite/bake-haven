import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted:boolean=false;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private authService: AuthService,
    private taostr: ToastrService
    ){
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
      this.authService.login(formData).subscribe({
        next: (logedUser=>{
          localStorage.setItem('logedUser', JSON.stringify(logedUser));
         if(logedUser.role === 'admin'){
          this.router.navigate(['/dashboard']);

         }else{
          this.router.navigate(['/product'])
         }
          this.taostr.success('Logged in successful!');
         

        }),
        error:(error=>{
          console.log('logged error',error);
          this.taostr.error('Failed to login')
        })
      })
      
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
