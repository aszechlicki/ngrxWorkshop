import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { isFormVisible, State } from '../reducers';
import { select, Store } from '@ngrx/store';
import { toggleLoading } from '../reducers/loading/loading.actions';
import { loadAddresses } from '../reducers/addresses/addresses.actions';
import { toggleFormVisibility } from '../reducers/form-visible/form-visible.actions';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isFormVisible = this.store.pipe(select(isFormVisible));
  formIcon = this.store.pipe(select(isFormVisible), map(isVisible => isVisible ? 'toggle_on' : 'toggle_off'));

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
                                        .pipe(
                                          map(result => result.matches),
                                          shareReplay()
                                        );

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<State>) {
  }

  toggleLoading() {
    this.store.dispatch(toggleLoading());
  }

  loadAddresses() {
    this.store.dispatch(loadAddresses());
  }

  clearStorage() {
    localStorage.clear();
  }

  toggleFormVisibility() {
    this.store.dispatch(toggleFormVisibility());
  }
}
