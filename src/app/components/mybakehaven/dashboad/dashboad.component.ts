import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit {

  addProductForm: FormGroup;

  customers:any;
  products:any;
  orders:any;
  messages:any;
  productForm:boolean=false
  productCategory=['cake','bread','ibiraha','capati']


  constructor(
    private formBuilder:FormBuilder,
    private authService: AuthService
    ){
    this.addProductForm= this.formBuilder.group({
      productName:['',[Validators.required]],
      category:['', [Validators.required]],
      quantity:['', [Validators.required]],
      price: ['',[Validators.required]],
      description: ['',[Validators.required]],
      imageurl:['', [Validators.required]]

    })
  }
 
  showCustomers(){

    this.products=null;
    this.orders=null;
    this.messages=null;

    this.authService.getUsers().subscribe({
      next:(users=>{
        this.customers=users
      }),error:(error=>{
        console.log(error)
      })
    })
  }
  showProducts(){


     this.customers=null;
     this.orders=null;
     this.messages=null;

    this.authService.getAllProducts().subscribe({
      next:(products=>{
        this.products=products
      }),
      error:(error=>{
        console.log(error)
      })
    })
  }
  showOrders(){

    this.customers=null;
    this.products=null;
    this. messages=null;

    this.orders=[
      {
        "orderId": 3,
        "totalPrice": 18000,
        "quantity": 2,
        "createdAt": "2024-03-17T15:56:38.000Z",
        "status": "pending",
        "isPaid": false,
        "user": {
          "id": 14,
          "firstName": "john",
          "lastName": "doe",
          "email": "doe@gmail.com",
          "phoneNumber": "5343434",
          "password": "$2b$10$eimzK9I0V4K0k9hP4mmy/up64uQbbjG6tz/rEzOT5Z2k6AQnGb6ea",
          "role": "user"
        },
        "product": {
          "productId": 3,
          "productName": "jjjjnm",
          "category": "cake",
          "quantity": 5,
          "price": 9000,
          "imageUrl": "yuuuuu"
        }
      }
    ]
  }
  showMessages(){

    this.customers=null
    this.products=null;
    this.orders=null;
  
    this.authService.getMessages().subscribe({
      next:(messages=>{
        this.messages=messages
        console.log('all messages ava',messages)
      })
    })
    
  }

 

  addProductClicked(){
    this.productForm=true;
    console.log('show product form')
  }

  ngOnInit(): void {
  this.showCustomers()
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
