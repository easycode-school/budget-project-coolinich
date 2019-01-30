import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DateHeaderComponent } from './components/date-header/date-header.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { StorageDataComponent } from './components/storage-data/storage-data.component';
import { TotalsComponent } from './components/totals/totals.component';


@NgModule({
  declarations: [
    AppComponent,
    DateHeaderComponent,
    AddFormComponent,
    StorageDataComponent,
    TotalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
