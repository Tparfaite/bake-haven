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
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    
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
    LoginComponent
  ],
  
})
export class MybakehavenModule { }
