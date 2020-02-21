import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MatSnackBar } from "@angular/material/snack-bar";
import * as addressesActions from "./reducers/addresses/addresses.actions";
import { tap } from "rxjs/operators";

@Injectable()
export class AppEffects {
  apiError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          addressesActions.loadAddressesFailure,
          addressesActions.addAddressFailure
        ),
        tap(action =>
          this.snackBar.open(action.error, null, { duration: 5000 })
        )
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private snackBar: MatSnackBar) {}
}
