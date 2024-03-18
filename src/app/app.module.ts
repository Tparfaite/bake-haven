import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MybakehavenModule } from './components/mybakehaven/mybakehaven.module';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MybakehavenModule,
    MatIconModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
