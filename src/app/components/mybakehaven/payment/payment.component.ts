import { Component } from '@angular/core';
import { PaystackOptions } from 'angular4-paystack';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(private authService: AuthService){}

  title='';


  options: PaystackOptions = {
    amount: 2,
    currency:'GHS',
    email: 'user@mail.com',
    ref: `${Math.ceil(Math.random() * 10e10)}`
  }

  paymentInit() {
    console.log('Payment initialized');
  }
  
  
  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    this.authService.paymentSuccessfull(ref.status)
    console.log(this.title, ref);
  }
  
  paymentCancel() {
    console.log('payment failed');
  }

  onClick(){}
}
