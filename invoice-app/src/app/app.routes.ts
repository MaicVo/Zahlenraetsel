import { Routes } from '@angular/router';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerDetailListComponent} from './customer/customer-detail-list/customer-detail-list.component';


export const routes: Routes = [
  {path: "customer", component: CustomerListComponent},
  {path: "customerDetail", component: CustomerDetailListComponent},
  {path: "**", redirectTo: "/costumer"}
];
