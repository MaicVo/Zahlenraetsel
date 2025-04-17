import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailListComponent} from './customer-detail-list/customer-detail-list.component';
import {DateCheckPipe} from "./date-check.pipe";



@NgModule({
  declarations: [
    CustomerListComponent, CustomerDetailListComponent, DateCheckPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomerListComponent, CustomerDetailListComponent, DateCheckPipe
  ]
})
export class CustomerModule { }
