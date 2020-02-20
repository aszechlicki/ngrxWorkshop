import { Action, createReducer, on } from '@ngrx/store';
import * as AddressesActions from './addresses.actions';
import { Address } from '../../address';

export const addressesFeatureKey = 'addresses';

export type State = Address[];

export const initialState: State = [];

const addressesReducer = createReducer(
  initialState,

  on(AddressesActions.loadAddresses, state => state),
  on(AddressesActions.loadAddressesSuccess, (state, action) => action.data),
  on(AddressesActions.loadAddressesFailure, (state, action) => state),
  on(AddressesActions.addAddress, state => state),
  on(AddressesActions.addAddressSuccess, (state, action) => [...state, action.data]),
  on(AddressesActions.addAddressFailure, (state, action) => state),
  // on(AddressesActions.addAddress, (state, action) => [...state, action.data]),
  // on(AddressesActions.addAddressSuccess, (state, action) => state),
  // on(AddressesActions.addAddressFailure, (state, action) => state.filter(it => it !== action.data)),

);

export function reducer(state: State | undefined, action: Action) {
  return addressesReducer(state, action);
}
