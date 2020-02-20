import { Component, OnInit } from '@angular/core';
import { getAddresses, isFormVisible, isLoading, State } from '../reducers';
import { select, Store } from '@ngrx/store';
import { Address } from '../address';
import { addAddress } from '../reducers/addresses/addresses.actions';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.scss']
})
export class ReduxComponent implements OnInit {
  isLoading = this.store.pipe(select(isLoading));
  formVisible = this.store.pipe(select(isFormVisible));
  addresses = this.store.pipe(select(getAddresses));

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
  }

  addAddress(address: Address) {
    this.store.dispatch(addAddress({data: address}));
  }
}
