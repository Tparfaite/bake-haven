import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService:AuthService, private router:Router, private toastr:ToastrService){}

  gotoProducts(){
    const logedUser=this.authService.getLoggedUser()
    console.log(logedUser)

    if(logedUser){
      this.router.navigate(['/product'])
    }
    else{
      this.toastr.error('Please login first')
    }
  }

}
