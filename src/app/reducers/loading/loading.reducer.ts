import { Action, createReducer, on } from '@ngrx/store';
import * as LoadingActions from './loading.actions';

export const loadingFeatureKey = 'loading';

export interface State {
  isLoading: boolean;
}

export const initialState: State = {
  isLoading: false
};

const loadingReducer = createReducer(
  initialState,

  on(LoadingActions.toggleLoading, state => ({isLoading: !state.isLoading})),
  on(LoadingActions.startLoading, state => ({isLoading: true})),
  on(LoadingActions.stopLoading, state => ({isLoading: false}))

);

export function reducer(state: State | undefined, action: Action) {
  return loadingReducer(state, action);
}
