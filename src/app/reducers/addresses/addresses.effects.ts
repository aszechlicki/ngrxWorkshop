import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AddressesActions from './addresses.actions';
import { DataService } from '../../data.service';

@Injectable()
export class AddressesEffects {

  loadAddresses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddressesActions.loadAddresses),
      switchMap(() =>
        this.dataService.loadAddresses().pipe(
          map(data => AddressesActions.loadAddressesSuccess({data})),
          catchError(error => of(AddressesActions.loadAddressesFailure({error}))))
      )
    );
  });

  addAddress$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AddressesActions.addAddress),
      switchMap(action =>
        this.dataService.addAddress(action.data).pipe(
          map(data => AddressesActions.addAddressSuccess({data})),
          catchError(error => of(AddressesActions.addAddressFailure({error, data: action.data}))))
      )
    );
  });

  constructor(private actions$: Actions, private dataService: DataService) {
  }

}
