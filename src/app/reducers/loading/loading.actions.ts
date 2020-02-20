import { createAction } from '@ngrx/store';

export const startLoading = createAction(
  '[Loading] Start'
);

export const stopLoading = createAction(
  '[Loading] Stop'
);

export const toggleLoading = createAction('[Loading] Toggle');
