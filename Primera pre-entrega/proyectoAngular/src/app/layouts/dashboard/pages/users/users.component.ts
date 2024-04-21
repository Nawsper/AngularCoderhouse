import { Component } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import Swal from 'sweetalert2';

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
    'role',
    'createdDate',
    'actions',
  ];

  users: IUser[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      role: 'profesor',
      createdDate: new Date(),
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      role: 'profesor',
      createdDate: new Date(),
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael.johnson@example.com',
      role: 'alumno',
      createdDate: new Date(),
    },
    {
      id: 4,
      firstName: 'Emily',
      lastName: 'Brown',
      email: 'emily.brown@example.com',
      role: 'admin',
      createdDate: new Date(),
    },
    {
      id: 5,
      firstName: 'James',
      lastName: 'Wilson',
      email: 'james.wilson@example.com',
      role: 'alumno',
      createdDate: new Date(),
    },
    {
      id: 6,
      firstName: 'Emma',
      lastName: 'Taylor',
      email: 'emma.taylor@example.com',
      role: 'alumno',
      createdDate: new Date(),
    },
    {
      id: 7,
      firstName: 'Daniel',
      lastName: 'Anderson',
      email: 'daniel.anderson@example.com',
      role: 'alumno',
      createdDate: new Date(),
    },
    {
      id: 8,
      firstName: 'Olivia',
      lastName: 'Thomas',
      email: 'olivia.thomas@example.com',
      role: 'alumno',
      createdDate: new Date(),
    },
    {
      id: 9,
      firstName: 'William',
      lastName: 'Jackson',
      email: 'william.jackson@example.com',
      role: 'alumno',
      createdDate: new Date(),
    },
    {
      id: 10,
      firstName: 'Sophia',
      lastName: 'White',
      email: 'sophia.white@example.com',
      role: 'alumno',
      createdDate: new Date(),
    },
  ];

  constructor(private matDialog: MatDialog) {}

  openDialog(editingUser?: IUser): void {
    this.matDialog
      .open(UserDialogComponent, { data: editingUser })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            if (editingUser) {
              this.users = this.users.map((u) =>
                u.id === editingUser.id ? { ...u, ...result } : u
              );
            } else {
              result.id = new Date().getTime().toString().substring(0, 5);
              result.createdDate = new Date();
              this.users = [...this.users, result];
            }
          }
          console.log(result);
        },
      });
  }

  onDeleteUser(id: number): void {
    if (this.users) {
      Swal.fire({
        title: '¿Estas seguro que quieres eliminar?',
        text: 'No podrás revertir esto',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si, borrar!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: '¡Borrado!',
            text: 'Tus datos han sido borrados.',
            icon: 'success',
          });
        }
      });
    }
    this.users = this.users.filter((u) => u.id != id);
  }
}
