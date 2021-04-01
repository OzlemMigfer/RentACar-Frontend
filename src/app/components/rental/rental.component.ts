import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rental1={id:1,brandName:"Range Rover",firstName:"Özlem",lastName:"Miğfer",rentDate:"14/02/2021",returnDate:"15/02/2021"}
  rental2={id:2,brandName:"Mercedes",firstName:"Arda",lastName:"Yerli",rentDate:"14/02/2021",returnDate:"16/02/2021"}

  rentals=[this.rental1,this.rental2];

  constructor() { }

  ngOnInit(): void {
  }

}
