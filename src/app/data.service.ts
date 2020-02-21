import { Injectable } from "@angular/core";
import { Address } from "./address";
import { delay, mergeMap, tap, shareReplay } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { timer } from "rxjs/internal/observable/timer";
import { throwError } from "rxjs/internal/observable/throwError";
import { of } from "rxjs/internal/observable/of";

@Injectable({
  providedIn: "root"
})
export class DataService {
  private counter = 1;

  private addressesSubject = new BehaviorSubject<Address[]>([]);
  addressesList: Observable<Address[]> = this.addressesSubject.asObservable();

  constructor() {}

  addAddress(item: Address) {
    if (item.company !== "Sii") {
      return timer(10000).pipe(
        mergeMap(() => throwError("Company is not Sii!"))
      );
    }

    return of(item).pipe(
      delay(1000),
      tap(() =>
        this.addressesSubject.next([...this.addressesSubject.value, item])
      )
    );
  }

  loadAddresses() {
    if (this.counter++ % 5 === 0) {
      return timer(10000).pipe(mergeMap(() => throwError("Api error")));
    }
    return this.addressesList.pipe(delay(500));
  }

  removeAddress(item: Address) {
    if (item.city === "Bydgoszcz") {
      return timer(10000).pipe(
        mergeMap(() => throwError("We can't leave Bydgoszcz!"))
      );
    }

    return of(item).pipe(
      delay(1000),
      tap(() =>
        this.addressesSubject.next(
          this.addressesSubject.value.filter(it => it !== item)
        )
      )
    );
  }
}
