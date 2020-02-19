import { Component, Input, OnInit } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'app-address-entry',
  templateUrl: './address-entry.component.html',
  styleUrls: ['./address-entry.component.scss']
})
export class AddressEntryComponent implements OnInit {
  @Input() item: Address;

  constructor() { }

  ngOnInit(): void {
  }

}
