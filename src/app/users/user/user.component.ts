import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { loadUser } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  constructor(
    private readonly router: ActivatedRoute,
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit(): void {

    this.router.params.subscribe(({id}) => {

      this.store.dispatch(loadUser({id}))
    })
  }

}
