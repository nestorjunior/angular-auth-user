import { Component, Input } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restricted-profile',
  templateUrl: './restricted-profile.component.html',
  styleUrls: ['./restricted-profile.component.scss']
})
export class RestrictedProfileComponent {
  userData: any;

  constructor(private loginComponent: LoginComponent, private router: Router) {
    this.userData = this.loginComponent.userData;
  }

  logout() {
    this.router.navigate([' ']);
  }
}
