import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  cakesAvaillable:boolean=false
  breadsAvailable:boolean=false

  constructor(){}
  ngOnInit(): void {
    this.showCakes(true)
  }

  showCakes(value:boolean){
    this.cakesAvaillable=value
  }
  showBreads(value:boolean){
    this.breadsAvailable=value
  }

}
