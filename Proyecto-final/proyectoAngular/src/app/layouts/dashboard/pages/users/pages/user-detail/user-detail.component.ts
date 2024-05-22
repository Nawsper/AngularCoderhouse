import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../users.service';
import { Observable, finalize } from 'rxjs';
import { IUser } from '../../models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  user$: Observable<IUser | undefined>;

  loading = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private usersService: UsersService
  ) {
    this.loading = true;
    this.user$ = this.usersService
      .getUserById(parseInt(this.activateRoute.snapshot.params['id']))
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      );
  }
}
