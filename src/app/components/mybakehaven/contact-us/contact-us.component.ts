import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm:FormGroup;
 constructor(private formBuilder: FormBuilder){
  this.contactForm = this.formBuilder.group({
    fullNames: ['',[Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message:['', Validators.required]
  })
 }
 ngOnInit(): void {
   
 }

 clickSendMessage(){
  if(this.contactForm.valid){
   const fullMessage = this.contactForm.value;
   console.log("full message sent",fullMessage )
  }
 }

}
