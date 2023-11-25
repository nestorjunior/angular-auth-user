import { Component, Input } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-restricted-profile',
  templateUrl: './restricted-profile.component.html',
  styleUrls: ['./restricted-profile.component.scss']
})
export class RestrictedProfileComponent {
  userDetails: any = {};

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((user: any) => {
      this.userDetails = user;
      console.log(this.userDetails)
    })
  }
}
