import { Injectable, NgZone } from '@angular/core';
import { Address } from './address';
import { delay, filter, scan, shareReplay, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private addressesSubject = new BehaviorSubject<Address>({
    company: 'Sii',
    firstName: 'Arkadiusz',
    lastName: 'Szechlicki',
    address: 'Plac Kościeleckich 3',
    address2: null,
    city: 'Bydgoszcz',
    state: 'AS',
    postalCode: '12345',
    shipping: 'free'
  });
  addressesList: Observable<Address[]> = this.addressesSubject.asObservable().pipe(
    filter(it => !!it),
    tap(val => console.log('tap', val)),
    scan((acc, curr) => [...acc, curr], []),
    tap(val => console.log('all', val)),
    shareReplay(1)
  );

  constructor(private zone: NgZone) {
  }

  addAddress(item: Address) {
    this.addressesSubject.next(item);
  }

  loadAddresses() {
    return this.addressesList.pipe(delay(500));
  }
}
