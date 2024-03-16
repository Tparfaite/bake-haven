import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit {

  addProductForm: FormGroup

  showCustomer:boolean=false;
  showProduct:boolean=false;
  showOrders:boolean=false;
  productForm:boolean=false;
  productCategory=['cake','bread','ibiraha','capati']


  constructor(private formBuilder:FormBuilder){
    this.addProductForm= this.formBuilder.group({
      productName:['',[Validators.required]],
      category:['', [Validators.required]],
      quantity:['', [Validators.required]],
      price: ['',[Validators.required]],
      imageurl:['', [Validators.required]]

    })
  }
  // showCustomerClicked(value:boolean){
  //   this.showCustomer=value;
    
  // }

  showProductClicked(value:boolean){
    this.showProduct=value
  }

  addProductClicked(){
    this.productForm=true;
    console.log('show product form')
  }

  ngOnInit(): void {
  
  }

  addProduct(){
    if(this.addProductForm.valid){
     console.log("product added is: ", this.addProductForm.value)
    }else{
      return;
    }
    this.addProductForm.reset()
    
  }

  closeProductForm(){
    this.productForm=false
  }
}
