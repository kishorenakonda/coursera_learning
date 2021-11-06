import { Component } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-angular-tutorial',
  templateUrl: './angular-tutorial.component.html',
  styleUrls: ['./angular-tutorial.component.css']
})
export class AngularTutorialComponent {

  ngOnInit() {
    this.getIPUsage();
  }

  constructor(private _customerService: CustomerService) { }
  data : any;
  getIPUsage() {
    this._customerService.customerDetails().subscribe( (resp ) => this.data = resp)
    console.log(this.data)
  }
}
