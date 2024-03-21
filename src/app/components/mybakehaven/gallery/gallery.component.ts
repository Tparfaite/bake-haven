import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {


  productCategory=['cake','bread','ibiraha','capati'];
  products:Product[]=[]

  constructor(private authService:AuthService, private router:Router, private toastr:ToastrService){}
  ngOnInit(): void {
    this.getAllProducts()
    
  }

 getAllProducts(){
  this.authService.getAllProducts().subscribe({
    next:(product=>{
    this.products=product;
    console.log("all products",this.products)
    }),
    error:(error=>{
      throw error.message
    })
  })
 }

 goToProductPage(){
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
