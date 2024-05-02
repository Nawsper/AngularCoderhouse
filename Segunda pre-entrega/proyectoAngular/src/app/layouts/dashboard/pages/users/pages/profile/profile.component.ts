import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../users.service';
import { Observable } from 'rxjs';
import { IUser } from '../../models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  user$: Observable<IUser | undefined>;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private usersServices: UsersService
  ) {
    this.user$ = this.usersServices.getUsersById(
      parseInt(this.activateRoute.snapshot.params['id'])
    );

    console.log(this.activateRoute.snapshot.params['id']);
  }
}
