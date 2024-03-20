import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products=null;
  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts(){
    this.authService.getAllProducts().subscribe({
      next:(products=>{
     this.products=products;
     console.log("get all products here",products)
     }),error:(error=>{
      console.log(error)
     })
    })
  }

  inputValue:FormControl=new FormControl();

  
 orderingProduct(name:any, price:any){

  console.log("product ordered", name,price)
 }

 getValue(){
  console.log(this.inputValue.value)
 }

}
