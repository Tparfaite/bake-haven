import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
ngOnInit(): void {
  this.animatedText()
}

sentence="Step into our bakery, where the aroma of freshly baked <br> goods welcomes you with open arms. from cakes ,<br> each creation is a testament to our <br> dedication to quality and flavor";
displayText='';
welcome:boolean=false;

animatedText(){
  const sentenceArray=this.sentence.split('');
  let currentIndex=0;
  const intervalId=setInterval(()=>{
   this.displayText += sentenceArray[currentIndex];
   currentIndex++;

   if(currentIndex === sentenceArray.length){
    this.welcome=true;
    clearInterval(intervalId)
   }
  },50)
}
}
