import { Action, createReducer, on } from '@ngrx/store';
import * as FormVisibleActions from './form-visible.actions';

export const formVisibleFeatureKey = 'formVisible';

export interface State {
  isVisible: boolean;
}

export const initialState: State = {
  isVisible: true
};

const formVisibleReducer = createReducer(
  initialState,

  on(FormVisibleActions.toggleFormVisibility, state => ({isVisible: !state.isVisible})),

);

export function reducer(state: State | undefined, action: Action) {
  return formVisibleReducer(state, action);
}
