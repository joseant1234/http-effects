import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from '../actions/user.actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly usersService: UserService,
  ) {
  }

  loadUser$ = createEffect(
    () => this.actions$.pipe(
      ofType(userActions.loadUser),
      tap( data => console.log('effect tap', data)),
      mergeMap(
        (action) => this.usersService.getUserById(action.id)
              .pipe(
                tap(data => console.log('get user effect', data)),
                map(user => userActions.loadUserSuccess({ user: user })),
                catchError(err => of(userActions.loadUserError({payload: err})))
              )
      )
    )
  );
}
