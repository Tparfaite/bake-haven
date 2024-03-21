import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DashboadComponent } from './dashboad/dashboad.component';
import { PaymentComponent } from './payment/payment.component';
import { Angular4PaystackModule } from 'angular4-paystack';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ProductsComponent,
    AboutUsComponent,
    ContactUsComponent,
    SignupComponent,
    LoginComponent,
    GalleryComponent,
    DashboadComponent,
    LoginComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    Angular4PaystackModule.forRoot('pk_test_722f0fe4cbb742d1885b1a2efe21bb6f1720a7b3'),
    
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    ProductsComponent,
    AboutUsComponent,
    ContactUsComponent,
    SignupComponent,
    LoginComponent,
    GalleryComponent,
    DashboadComponent,
    LoginComponent,
    PaymentComponent
  ],
  
})
export class MybakehavenModule { }
