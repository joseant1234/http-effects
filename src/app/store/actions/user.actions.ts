import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const loadUser = createAction(
  '[Users] Load user',
  props<{ id: string }>()
);
export const loadUserSuccess = createAction(
  '[User] Load user success',
  props<{user: User}>()
);
export const loadUserError = createAction(
  '[User] Load user error',
  props<{payload: any}>()
);
