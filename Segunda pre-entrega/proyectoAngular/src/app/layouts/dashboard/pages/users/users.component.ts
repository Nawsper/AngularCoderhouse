import { Component, OnInit } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import Swal from 'sweetalert2';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'userName',
    'role',
    'createdDate',
    'actions',
  ];

  loading = false;

  users: IUser[] = [];

  constructor(
    private matDialog: MatDialog,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.usersService.getUsers().subscribe({
      next: (users) => {
        console.log('next: ', users);
        this.users = users;
      },
      error: (err) => {
        console.log('error: ', err);
        Swal.fire('Error', 'Ocurrio un error', 'error');
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

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
