import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { interval, Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit {

  addProductForm: FormGroup;

  selectedProduct: EventEmitter<Product> = new EventEmitter<Product>()

 isEdit:boolean;

  users:any;
  products:any;
  orders:any;
  messages:any;
  productForm:boolean=false
  productCategory=['cake','bread','ibiraha','capati'];

  imageUrl:any;


  constructor(
    private formBuilder:FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router:Router,
    private http: HttpClient
    ){
    this.addProductForm= this.formBuilder.group({
      productName:['',[Validators.required]],
      category:['', [Validators.required]],
      quantity:['', [Validators.required]],
      price: ['',[Validators.required]],
      description: ['',[Validators.required]],
      imageUrl:[null, [Validators.required]]

    })
  }

  onFileSelected(event:any){
    const file:File=event.target.files[0];
    this.uploadImage(file).subscribe((imageUrl:any)=>{
      this.imageUrl=imageUrl.secure_url;
      console.log('imageUrl',this.imageUrl)
    })

  }

  uploadImage(file: File){
    const formData=new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'myDocs');
    return this.http.post<any>('https://api.cloudinary.com/v1_1/dkeo0pa4b/image/upload', formData)
  }
 
  showCustomers(){

    this.products=null;
    this.orders=null;
    this.messages=null;

    this.authService.getUsers().subscribe({
      next:(users=>{
        this.users=users
      }),error:(error=>{
        console.log(error)
      })
    })
  }
  showProducts(){

     this.users=null;
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

    this.users=null;
    this.products=null;
    this. messages=null;

    this.orders
    this.authService.getOrders().subscribe({
      next:(order=>{
        this.orders=order
        console.log('all orders', order)
      })
    })
  }
  showMessages(){

    this.users=null
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
    this.isEdit=false;
    this.productForm=true;
    console.log('show product form')
  }

  ngOnInit(): void {
  this.showCustomers()
  }

  addProduct(){
    this.isEdit=true
    if(this.addProductForm.valid && this.imageUrl){
      const newProduct=this.addProductForm.value;
      newProduct.imageUrl=this.imageUrl

      console.log(newProduct)
      this.authService.createProduct(newProduct).subscribe({
        next:(product=>{
          this.products.push(product)
          this.toastr.success('Product added successful!')
          console.log("created product",product)
        }), error:(error=>{
          this.toastr.error("Failed to add product")
          console.log("product error",error)
        })
      })
    
    }else{
      return;
    }
    this.addProductForm.reset()
    
  }

  closeProductForm(){
    this.productForm=false
  }

  

  deleteMessage(id:number): any{
    this.authService.deleteMessage(id).subscribe({
      next:(deleted=>{
        this.messages=this.messages.filter((message: {
           id: number;
           names: string;
           email: string;
           message: string
           })=>message.id !== id)
        this.toastr.success('Message deleted successful!')
        console.log("message deleted", deleted)
      }),
      error:(error=>{
        console.log(error)
      })
    })
  }

  deleteCustomer(id:number){
    this.authService.deleteUser(id).subscribe({
      next:(deleteUser=>{
        this.users=this.users.filter((user:{
          id: number,
          firstName:string,
          lastName: string,
          phoneNumber: string,
          email: string,
          password: string
        })=>user.id !== id);
        this.toastr.success('user deleted successful')
        console.log("deleted user",deleteUser)
      }), error:(error=>{
        this.toastr.error('Failed to delete user')
        console.log(error)
      })
    })
  }

  deleteProduct(productId:number):any{
    this.authService.deleteProduct(productId).subscribe({
      next:(deleted )=>{
        this.products=this.products.filter((product: {
          productId: number;
         
        })=>product.productId !== productId )
        this.toastr.success('Product deleted successful');
        console.log('deleted product', deleted)
      },
      error:(error=>{
        this.toastr.error('Failed to delete this product')
        this.toastr.error("you can't delete ordered product")
        console.log(error)
      })
    })
  }

  homeClicked(){
    this.router.navigate(['/'])
  }

  editProduct(id:number, product: Product){
    this.isEdit=true
    this.productForm=true;
   
   console.log('product to edit',product, id)
   
   this.addProductForm.setValue({
    productName:product.productName,
    category:product.category,
    price:product.price,
    quantity:product.quantity,
    description:product.description,
    imageUrl:product.imageUrl
   })

   this.authService.updateProduct(id, product).subscribe({
    next:(updatedProd=>{
     
      console.log('updated product',updatedProd)
    }),
    error:(error=>{
      console.log(error)
    })
   })
   
   
  }

  approveOrder(orderId:number):any{
   this.authService.approveOrder(orderId).subscribe({
    next:(approveOrder=>{
     this.authService.getOrders()
    }),
    error:(error=>{
      throw error.message
    })
   })
  }
  rejectOrder(orderId:number):any{
    this.authService.rejectOrder(orderId).subscribe({
      next:(rejectOrder=>{
   this.authService.getOrders()
      }), error:(error=>{
        throw error.message
      })
    })
  }

  

 
}
