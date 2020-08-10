import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  users: User[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.userService.getUsers()
    // .subscribe(users => {
    //   this.users = users;
    // })
  }

}
