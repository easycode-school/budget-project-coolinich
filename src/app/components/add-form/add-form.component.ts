import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
  @ViewChild('addItemForm') form: NgForm;
  @Output() newRecord = new EventEmitter();

  public newRecordItem = {
    type: 'income',
    description: '',
    value: 0,
    id: 0
  };
  constructor() { }

  ngOnInit() {
  }

  onSubmitHandler() {
    this.newRecord.emit(this.newRecordItem);
    this.form.resetForm();
  }

}
