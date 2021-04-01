import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1={carId:1,brandName:"Range Rover",colorName:"White",modelYear:2021,dailyPrice:100,description:"Evoque"}
  car2={carId:2,brandName:"Mercedes",colorName:"White",modelYear:2014,dailyPrice:150,description:"c180"}
  car3={carId:3,brandName:"Range Rover",colorName:"Black",modelYear:2019,dailyPrice:110,description:"Velar"}
  car4={carId:4,brandName:"Mercedes",colorName:"Black",modelYear:2020,dailyPrice:120,description:"g63"}
  car5={carId:5,brandName:"Range Rover",colorName:"White",modelYear:2018,dailyPrice:80,description:"Sport"}
  car6={carId:6,brandName:"Range Rover",colorName:"White",modelYear:2016,dailyPrice:60,description:"Vogue"}  
  

  cars=[this.car1,this.car2,this.car3,this.car4,this.car5,this.car6];

  constructor() { }

  ngOnInit(): void {
  }

}
