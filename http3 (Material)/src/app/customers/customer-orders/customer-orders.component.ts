import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/shared/classes/customer.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class AddOrderComponent implements OnInit {
  identifier: any;
  customer: Customer;
  invoices: any;
  panelOpenState = false;

  constructor(public api: ApiService, public route: ActivatedRoute) { }
  getCustomer() {
    this.identifier = this.route.snapshot.params.id;
    this.api.getCustomer$(this.identifier).subscribe(us => {
      this.customer = us;
      if (this.customer.invoices[0].invid !== '') {
        this.invoices = this.customer.invoices;
      }
  });
  }
  ngOnInit() {
    this.getCustomer();
  }
}
