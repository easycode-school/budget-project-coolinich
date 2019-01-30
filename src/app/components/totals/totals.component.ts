import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent implements OnInit {
  totalBudget: number;
  incomeBudget: number;
  expenseBudget: number;
  constructor() {
    this.totalBudget = 0;
    this.incomeBudget = 0;
    this.expenseBudget = 0;
  }

  ngOnInit() {
  }

}
