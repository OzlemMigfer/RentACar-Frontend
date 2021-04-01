import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brand1={brandId:1,brandName:"Range Rover"}
  brand2={brandId:2,brandName:"Mercedes"}

  brands=[this.brand1,this.brand2,];

  constructor() { }

  ngOnInit(): void {
  }

}
