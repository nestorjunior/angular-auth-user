import { Component } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  userExists: boolean = false;
  userData: any;
  showForm: boolean = true;
  showUserNotFound: boolean = false;

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.validateUser(this.email).subscribe((data: any) => {
      if (data.length > 0) {
        this.userExists = true;
        this.userData = data[0];
        this.showForm = false;
        this.showUserNotFound = false;
      } else {
        this.userExists = false;
        this.showUserNotFound = true;
      }
    })
  }
}
