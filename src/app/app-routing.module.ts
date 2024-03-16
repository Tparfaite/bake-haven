import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/mybakehaven/login/login.component';
import { ProductsComponent } from './components/mybakehaven/products/products.component';
import { GalleryComponent } from './components/mybakehaven/gallery/gallery.component';
import { AboutUsComponent } from './components/mybakehaven/about-us/about-us.component';
import { ContactUsComponent } from './components/mybakehaven/contact-us/contact-us.component';
import { HomepageComponent } from './components/mybakehaven/homepage/homepage.component';
import { SignupComponent } from './components/mybakehaven/signup/signup.component';
import { DashboadComponent } from './components/mybakehaven/dashboad/dashboad.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'login', component:LoginComponent},
  {path:'product', component:ProductsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'about', component: AboutUsComponent},
  {path:'contact', component: ContactUsComponent},
  {path:'signup', component: SignupComponent},
  {path:'dashboard', component: DashboadComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
