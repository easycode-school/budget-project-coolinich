import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage-data',
  templateUrl: './storage-data.component.html',
  styleUrls: ['./storage-data.component.css']
})
export class StorageDataComponent implements OnInit {
  public storage = {
    current_list_income: [],
    current_list_expense: [],
  };
  constructor() { }

  ngOnInit() {
  }

  onNewTaskSubmitHandler(newRecordItem) {
    if (newRecordItem.type === 'income') {
      this.storage.current_list_income.push(Object.assign({}, newRecordItem));
    } else {
      this.storage.current_list_expense.push(Object.assign({}, newRecordItem));
    }
  }
}
