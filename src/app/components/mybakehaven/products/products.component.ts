import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  inputValue:FormControl=new FormControl();

  products = [
    {
    imageUrl: "../../../../assets/photos/cake3.jfif", 
    name: 'Birthday cake',
    description:'Our fantastically fresh Sweet Cakes are made entirely out of classic retro sweets. A deliciously unique alternative to a celebration cake ',
    price: 10000,
   },
   {
    imageUrl: "../../../../assets/photos/cake1.jfif", 
    name: 'Birthday cake',
    description:'Our fantastically fresh Sweet Cakes are made entirely out of classic retro sweets. A deliciously unique alternative to a celebration cake ',
    price: 15000,
   },
   {
    imageUrl: "../../../../assets/photos/wedingcake2.jfif", 
    name: 'wedding cake',
    description:'Our fantastically fresh Sweet Cakes are made entirely out of classic retro sweets. A deliciously unique alternative to a celebration cake ',
    price: 50000,
   },
   {
    imageUrl: "../../../../assets/photos/wedingcake1.jfif", 
    name: 'wedding cake',
    description:'Our fantastically fresh Sweet Cakes are made entirely out of classic retro sweets. A deliciously unique alternative to a celebration cake ',
    price: 60000,
   },
   {
    imageUrl: "../../../../assets/photos/cake9.jfif", 
    name: 'Birthday cake',
    description:'Our fantastically fresh Sweet Cakes are made entirely out of classic retro sweets. A deliciously unique alternative to a celebration cake ',
    price: 19.99,
   },
   {
    imageUrl: "../../../../assets/photos/cake7.jfif", 
    name: 'Birthday cake',
    price: 19.99,
   },
   {
    imageUrl: "../../../../assets/photos/bread1.jfif", 
    name: 'Birthday cake',
    price: 19.99,
   },
   {
    imageUrl: "../../../../assets/photos/bread2.jfif", 
    name: 'Birthday cake',
    price: 19.99,
   },
   {
    imageUrl: "../../../../assets/photos/bread6.jfif", 
    name: 'Birthday cake',
    price: 19.99,
   },
   {
    imageUrl: "../../../../assets/photos/bread7.jfif", 
    name: 'Birthday cake',
    price: 19.99,
   },
   {
    imageUrl: "../../../../assets/photos/capati1.jfif", 
    name: 'Birthday cake',
    price: 19.99,
   },
   {
    imageUrl: "../../../../assets/photos/capati2.jfif", 
    name: 'Birthday cake',
    price: 19.99,
   },
   {
    imageUrl: "../../../../assets/photos/capati3.jfif", 
    name: 'Birthday cake',
    price: 19.99,
   },
   {
    imageUrl: "../../../../assets/photos/ibiraha1.jfif", 
    name: 'Birthday cake',
    price: 19.99,
   },
   {
    imageUrl: "../../../../assets/photos/ibiraha.jfif", 
    name: 'Birthday cake',
    price: 19.99,
   },
 ];


 orderingProduct(name:any, price:any){

  console.log("product ordered", name,price)
 }

 getValue(){
  console.log(this.inputValue.value)
 }

}
