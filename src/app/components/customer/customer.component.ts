import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer1={id:1,companyName:"KOSGIB"}
  customer2={id:2,companyName:"MORTEK"}

  customers=[this.customer1,this.customer2];
  constructor() { }

  ngOnInit(): void {
  }

}
