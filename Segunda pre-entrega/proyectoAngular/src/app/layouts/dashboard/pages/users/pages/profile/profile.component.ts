import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  constructor(private activateRoute: ActivatedRoute) {
    console.log(this.activateRoute.snapshot.params['id']);
  }
}
