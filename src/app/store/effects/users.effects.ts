import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions/users.actions';
import { tap, mergeMap, map } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class UsersEffects {

  // actions es un observable q está al pendiente de todas las acciones que se disparan
  constructor(
    private readonly actions$: Actions,
    private readonly usersService: UserService,
  ) {
  }

  // create effect se pasa un callback que espera un observable. Si se deja this.actions$ estaría al pendiente de todas las acciones, por eso se debe filtrar
  // el mergeMap ayudará a disparar un nuevo observable mezclando con el anterior observable. El merge map se envia un callback con un observable
  loadUsers$ = createEffect(
    () => this.actions$.pipe(
      ofType(usersActions.loadUsers),
      tap( data => console.log('effect tap', data)),
      mergeMap(
        () => this.usersService.getUsers()
              .pipe(
                tap(data => console.log('get users effect', data)),
                map(users => usersActions.loadUsersSuccess({ users: users }))
              )
      )
    )
  );
}
