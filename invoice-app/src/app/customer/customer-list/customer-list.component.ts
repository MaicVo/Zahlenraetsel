import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {Customer} from '../../customer';
import {CustomerService} from '../../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  providers: [CustomerService],
  standalone: false,
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  @Input()
  costumerList: Customer[] | null = [];
  @Output()
  customerSelectedEvent: EventEmitter<Customer> = new EventEmitter<Customer>()
  selectedCustomer: Customer | undefined;

  customerSelected(selectedCustomer: Customer) {
    if (selectedCustomer == this.selectedCustomer) {
      if (selectedCustomer.discontinued) {
        selectedCustomer.discontinued = false;
      }
      else{ selectedCustomer.discontinued = true;}
    }
    this.selectedCustomer=selectedCustomer;

    this.customerSelectedEvent.emit(selectedCustomer);
  }

  constructor(customerService: CustomerService) {
  }


}

