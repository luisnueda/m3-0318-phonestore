import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import { PhoneService } from '../services/phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {
  phones$:Observable<any>;
  phones:Array<any> = [];

  constructor(phoneService:PhoneService) {
    this.phones$ = phoneService.getList();
    phoneService.getList().subscribe( phones => this.phones = phones);
  }

  ngOnInit() {
  }

}
