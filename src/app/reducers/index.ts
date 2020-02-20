import { Action, ActionReducer, ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAddresses from './addresses/addresses.reducer';
import * as fromLoading from './loading/loading.reducer';
import * as fromFormVisible from './form-visible/form-visible.reducer';

export interface State {

  [fromAddresses.addressesFeatureKey]: fromAddresses.State;
  [fromLoading.loadingFeatureKey]: fromLoading.State;
  [fromFormVisible.formVisibleFeatureKey]: fromFormVisible.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromAddresses.addressesFeatureKey]: fromAddresses.reducer,
  [fromLoading.loadingFeatureKey]: fromLoading.reducer,
  [fromFormVisible.formVisibleFeatureKey]: fromFormVisible.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [localStorageMetaReducer] : [localStorageMetaReducer];

export const getState = (state: State) => state;
export const getAddresses = createSelector(getState, state => state[fromAddresses.addressesFeatureKey]);
export const isLoading = createSelector(getState, state => state[fromLoading.loadingFeatureKey].isLoading);
export const isFormVisible = createSelector(getState, state => state[fromFormVisible.formVisibleFeatureKey].isVisible);

const storageKey = 'ngrx-state';
const preservedKeys: (keyof State)[] = [
  fromAddresses.addressesFeatureKey
];

function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}

function getSavedState(localStorageKey: string) {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

export function localStorageMetaReducer<S, A extends Action = Action>(reducer: ActionReducer<S, A>) {
  let onInit = true;
  return (state: S, action: A): S => {
    const nextState = reducer(state, action);
    if (onInit) {
      onInit = false;
      const savedState = getSavedState(storageKey);
      return {...nextState, ...savedState};
    }
    const stateToSave: Partial<State> = {};
    for (const key of preservedKeys) {
      stateToSave[key] = nextState[key];
    }
    setSavedState(stateToSave, storageKey);
    return nextState;
  };
}
