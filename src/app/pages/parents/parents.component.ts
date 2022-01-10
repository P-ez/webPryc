import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {
  display=false
  toggle(){
    this.display=!this.display;
  }
  display1=false
  toggle1(){
    this.display1=!this.display1;
  }
  display2=false
  toggle2(){
    this.display2=!this.display2;
  }
  display3=false
  toggle3(){
    this.display3=!this.display3;
  }
  display4=false
  toggle4(){
    this.display4=!this.display4;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
