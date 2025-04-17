import {Component, OnDestroy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Customer} from './customer';
import {CustomerModule} from './customer/customer.module';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerService} from './customer.service';
import {CUSTOMER} from './customer/customer.mock';
import {async, EMPTY, Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CustomerModule],
  providers: [CustomerService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'invoice-app';
  public selectedCustomer: Customer | undefined;
  public customers : Customer[];
  customerMockList: Observable<Customer[]> = EMPTY

  constructor(private customerService: CustomerService) {
    this.customers= this.customerService.getAllCustomers();
    this.customerMockList=this.customerService.getAllCostumersAsObservables();

   //customerService.addCustomer( new Customer("new Firstname D", "new Lastname D", "new Steet D", "new Zip D", "new City C", true,"homer.jpg",new Date(2025,1,13)));
    //customerService.deleteCustomer(CUSTOMER.at(1));
  }

ngOnInit() {
}

ngOnDestroy() {
}

  handleCustomerSelected(event: Customer) {
    this.selectedCustomer = event;
    console.log("In Appcomponent ", event);
  }


  protected readonly async = async;
}
