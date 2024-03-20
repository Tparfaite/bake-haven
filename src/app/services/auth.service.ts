import { Injectable } from '@angular/core';
import {CreateUserDto, UserLogin, Messages, Product, OrderDto} from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}

  header= new HttpHeaders({
    'Content-Type': 'application/json'
  })

  appUrl='http://localhost:3002/api'

  createUser(user:CreateUserDto):Observable<any>{
    return this.http.post<CreateUserDto>(`${this.appUrl}/users/create`,user,{headers:this.header}).pipe(
      tap(result=>{
        console.log("created user", result)
      })
    )
  }

  createOrder(order:OrderDto):Observable<any>{
    return this.http.post<OrderDto>(`${this.appUrl}/order`, order, {headers:this.header}).pipe(
      tap(result=>{
        console.log("created order", result)
      })
    )
  }

  login(user: UserLogin): Observable<any>{
    return this.http.post<UserLogin>(`${this.appUrl}/users/login`, user,{headers:this.header}).pipe(
      tap(loggedUser=>{
        console.log('loggedUser',loggedUser)
      })
    )
  }

  getUsers():Observable<any>{
    return this.http.get(`${this.appUrl}/users/all`,{headers:this.header}).pipe(
      tap(getUsers=>{
        console.log('getUsers',getUsers)
      })
    )
  }

  getOrders():Observable<any>{
    return this.http.get(`${this.appUrl}/order/allOrders`, {headers:this.header}).pipe(
      tap(getOrders=>{
        console.log('all orders', getOrders)
      })
    )
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete(`${this.appUrl}/users/${id}`, {headers:this.header}).pipe(
      tap(deleted=>{
     console.log('deleted user',deleted)
      })
    )
  }

  getUserById(id:number): Observable<any>{
    return this.http.get(`${this.appUrl}/users/${id}`, {headers:this.header}).pipe(
      tap(oneUser=>{
        console.log('get one user', oneUser)
      })
    )
  }

  createMessage(message: Messages):Observable<any>{
    return this.http.post<Messages>(`${this.appUrl}/messages/post`,message, {headers:this.header}).pipe(
      tap(message=>{
        console.log('message created',message)
      })
    )
  }

  getMessages():Observable<any>{
    return this.http.get(`${this.appUrl}/messages/get`,{headers:this.header}).pipe(
      tap(getMessages=>{
        console.log("all messages",getMessages)
      })
    )
  }

  deleteMessage(id:number):Observable<any>{
    return this.http.delete(`${this.appUrl}/messages/${id}`, {headers:this.header}).pipe(
      tap(deleteMessage=>{
        console.log("delete message",deleteMessage)
      })
    )
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete(`${this.appUrl}/products/${id}`, {headers:this.header}).pipe(
      tap(deletedProduct=>{
        console.log('deleted product', deletedProduct)
      })
    )
  }

  createProduct(product: Product): Observable<any>{
    return this.http.post<Product>(`${this.appUrl}/products/create`, product, {headers:this.header}).pipe(
      tap(product=>{
        console.log('created product', product)
      })
    )
  }

  getAllProducts():Observable<any>{
    return this.http.get(`${this.appUrl}/products/all`,{headers:this.header}).pipe(
      tap(allProducts=>{
        console.log('all products', allProducts)
      })
    )
  }

  updateProduct(id:number, productData: Product): Observable<Product>{
    return this.http.patch<Product>(`${this.appUrl}/products/${id}`,productData, {headers:this.header}).pipe(
      tap(updatedProduct=>{
        console.log('updated product', updatedProduct)
      })
    )
  }

  
}
