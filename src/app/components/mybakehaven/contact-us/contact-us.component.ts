import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm:FormGroup;
 constructor(
  private formBuilder: FormBuilder,
  private authService: AuthService,
  private toastr:ToastrService
  ){
  this.contactForm = this.formBuilder.group({
    names: ['',[Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message:['', Validators.required]
  })
 }
 ngOnInit(): void {
   
 }

 clickSendMessage(){
  if(this.contactForm.valid){
   const fullMessage = this.contactForm.value;
   this.authService.createMessage(fullMessage).subscribe({
    next:(message=>{
      this.toastr.success('Your message has sent')
    }),error:(error=>{
      this.toastr.error('Failed to sent your message')
    })
   })
   this.contactForm.reset()
  }
 }
 whatsapNumber='0786022037';
 predifinedMessage=''
 onWhatsapClick(){
  window.open(`https://wa.me/${this.whatsapNumber}?text=${encodeURIComponent(this.predifinedMessage)}`)
 }

}
