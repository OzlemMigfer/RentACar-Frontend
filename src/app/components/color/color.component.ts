import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color1={colorId:1,colorName:"Black"}
  color2={colorId:2,colorName:"White"}
  color3={colorId:3,colorName:"Red"}

  colors=[this.color1,this.color2,this.color3];

  constructor() { }

  ngOnInit(): void {
  }

}
