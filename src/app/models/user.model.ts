export interface CreateUserDto{
    firstName: string;
    lastName: string;
    phoneNumber: number;
    email:string;
    password: string

}

export interface UserLogin {
    email: string;
    password: string;
   
}

export interface Messages {
    names: string;
    email: string;
    message: string
}

export interface Product {
    productName: string;
    category: string;
    quantity: number;
    price: number;
    description: string;
    imageUrl: string
    
}

export interface OrderDto {
    userId: number;
    productId: number;
    quantity: number;


}