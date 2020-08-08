import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(users => {

    })
  }

}
