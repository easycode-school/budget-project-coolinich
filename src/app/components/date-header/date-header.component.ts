import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-header',
  templateUrl: './date-header.component.html',
  styleUrls: ['./date-header.component.css']
})
export class DateHeaderComponent implements OnInit {
  getMonth: string;
  constructor() {
    const currentDate = new Date();
    this.getMonth = currentDate.toLocaleDateString('en-US', {year: 'numeric',
    month: 'long'});
   }

  ngOnInit() {
  }

}
