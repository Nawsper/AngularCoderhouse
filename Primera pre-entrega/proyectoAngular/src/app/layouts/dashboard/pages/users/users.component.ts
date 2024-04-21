import { Component } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'createdDate',
  ];

  users: IUser[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      createdDate: new Date(),
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      createdDate: new Date(),
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael.johnson@example.com',
      createdDate: new Date(),
    },
    {
      id: 4,
      firstName: 'Emily',
      lastName: 'Brown',
      email: 'emily.brown@example.com',
      createdDate: new Date(),
    },
    {
      id: 5,
      firstName: 'James',
      lastName: 'Wilson',
      email: 'james.wilson@example.com',
      createdDate: new Date(),
    },
    {
      id: 6,
      firstName: 'Emma',
      lastName: 'Taylor',
      email: 'emma.taylor@example.com',
      createdDate: new Date(),
    },
    {
      id: 7,
      firstName: 'Daniel',
      lastName: 'Anderson',
      email: 'daniel.anderson@example.com',
      createdDate: new Date(),
    },
    {
      id: 8,
      firstName: 'Olivia',
      lastName: 'Thomas',
      email: 'olivia.thomas@example.com',
      createdDate: new Date(),
    },
    {
      id: 9,
      firstName: 'William',
      lastName: 'Jackson',
      email: 'william.jackson@example.com',
      createdDate: new Date(),
    },
    {
      id: 10,
      firstName: 'Sophia',
      lastName: 'White',
      email: 'sophia.white@example.com',
      createdDate: new Date(),
    },
  ];

  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog
      .open(UserDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          console.log(result);
        },
      });
  }
}
