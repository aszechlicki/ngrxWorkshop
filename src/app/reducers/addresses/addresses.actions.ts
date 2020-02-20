import { createAction, props } from '@ngrx/store';
import { Address } from '../../address';

export const loadAddresses = createAction(
  '[Addresses] Load Addressess'
);

export const loadAddressesSuccess = createAction(
  '[Addresses] Load Addressess Success',
  props<{ data: Address[] }>()
);

export const loadAddressesFailure = createAction(
  '[Addresses] Load Addressess Failure',
  props<{ error: any }>()
);

export const addAddress = createAction(
  '[Addresses] Add Address',
  props<{ data: Address }>()
);

export const addAddressSuccess = createAction(
  '[Addresses] Add Address Success',
  props<{ data: Address }>()
);

export const addAddressFailure = createAction(
  '[Addresses] Add Address Failure',
  props<{ error: any, data: Address }>()
);
