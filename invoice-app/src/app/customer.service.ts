import { Injectable } from '@angular/core';
import {Customer} from './customer';
import {CUSTOMER, CUSTOMER1, CUSTOMER2, CUSTOMER3, CUSTOMER4, CUSTOMER5} from './customer/customer.mock';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
mitBackend: boolean=false;
  customerSubject : ReplaySubject<Customer[]> = new ReplaySubject<Customer[]>();

  constructor() {

    setTimeout(() => {
      this.customerSubject.next([CUSTOMER1]);
    },3000);
    setTimeout(() => {
      this.customerSubject.next([CUSTOMER1,CUSTOMER2]);
    },5000);
    setTimeout(() => {
      this.customerSubject.next([CUSTOMER1, CUSTOMER2, CUSTOMER3, CUSTOMER4, CUSTOMER5]);
    },8000);
  }



 getAllCustomers(): Customer[]{
   if (this.mitBackend) {
     // TO DO
     return CUSTOMER;
   }else{
     return CUSTOMER;
   }
}


  public getAllCostumersAsObservables() : Observable<Customer[]>{

    return this.customerSubject.asObservable();
  }

addCustomer(customer: Customer):Customer{
   CUSTOMER.push(customer);
   return customer;
}

  deleteCustomer(customer: Customer | undefined):Customer[] {
    if (customer instanceof Customer) {
      const index = CUSTOMER.indexOf(customer);
      if (index !== -1) {
        CUSTOMER.splice(index, 1);
      }
    }
    return CUSTOMER;
  }

}
