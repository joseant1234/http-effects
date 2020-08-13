import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { loadUsers } from '../../store/actions/users.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  users: User[] = [];

  constructor(
    private readonly store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this.userService.getUsers()
    // .subscribe(users => {
    //   this.users = users;
    // })
    this.store.select('users').subscribe(({ users }) => {
      this.users = users;
    });
    this.store.dispatch(loadUsers());
  }

}
