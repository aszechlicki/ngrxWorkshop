import { Component, Input } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent {
  @Input() items: Address[];
}
