import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mapTo } from 'rxjs/operators';

import * as loadingActions from './loading.actions';
import * as addressesActions from '../addresses/addresses.actions';

@Injectable()
export class LoadingEffects {

  startLoading$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addressesActions.loadAddresses, addressesActions.addAddress),
      mapTo(loadingActions.startLoading())
    );
  });

  stopLoading$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addressesActions.loadAddressesSuccess,
        addressesActions.loadAddressesFailure,
        addressesActions.addAddressSuccess,
        addressesActions.addAddressFailure),
      mapTo(loadingActions.stopLoading())
    );
  });


  constructor(private actions$: Actions) {
  }

}
