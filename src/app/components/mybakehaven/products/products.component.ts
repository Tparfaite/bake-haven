import { Component, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrderDto, Product } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products=null;
  quantity:number;
  buyClicked:boolean=false;
  order:OrderDto;
  loggedUser:any;
  orderingProducts:boolean=false;
  @Output() getClickedProduct={
  productId:0 ,
  imageUrl:'',
  productName:'',
  price:0,
  description:'',
  category:'',
  quantity:1,
 }

  constructor(private authService: AuthService){}
  ngOnInit(): void {
    this.authService.paymentSuccessEvent.subscribe(status=>{
      if(status==='success'){
     this.loggedUser=this.authService.getLoggedUser();
     
   const order:OrderDto={
    userId: this.authService.getLoggedUser().id,
     productId: this.getClickedProduct.productId,
     quantity: this.quantity

    }
   this.authService.createOrder(order).subscribe({
  next:(orderCreated=>{
   console.log('orderCreated', orderCreated)
   this.orderingProducts=false;
   this.buyClicked=false
  }),error:(error=>{
    throw error.message
  })
})

    }
    })
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

  inputValue:FormControl=new FormControl(1);
  

  
 orderingProduct(productId:number, product:any){
  this.orderingProducts=true
   const productToOrder=product
   this.getClickedProduct=productToOrder
  console.log("product to order", productId,product)
 }
totalPrice:number
 getValue(){
  this.buyClicked=true
  const unitPrice=this.getClickedProduct.price;
  this.quantity=this.inputValue.value;
  this.totalPrice=unitPrice * this.quantity;
  console.log("unit price",unitPrice);
  console.log("quantity",this.quantity)
  console.log("total price",this.totalPrice)
 }

 sendOrder(order:OrderDto){
  this.authService.createOrder(order).subscribe({
    next:(newOrder=>{
   this.order=newOrder;
   console.log("order is made", this.order)
    }),
    error:(error=>{
      throw error.message
    })
  })
 }

 

}
