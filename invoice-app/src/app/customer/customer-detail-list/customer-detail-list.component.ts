import {Component, Input} from '@angular/core';
import {Customer} from '../../customer';

@Component({
  selector: 'app-customer-detail-list',
  standalone: false,
  templateUrl: './customer-detail-list.component.html',
  styleUrl: './customer-detail-list.component.css'
})
export class CustomerDetailListComponent {
@Input()
  customerDetails: Customer | undefined
}
