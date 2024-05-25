import { Component, OnInit } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import Swal from 'sweetalert2';
import { UsersService } from './users.service';
import { AuthService } from '../../../../core/services/auth.service';
import { Observable } from 'rxjs';

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

  authUser$: Observable<IUser | null>;

  constructor(
    private matDialog: MatDialog,
    private usersService: UsersService,
    private authService: AuthService
  ) {
    this.authUser$ = this.authService.authUser$;
  }

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
      .subscribe((result) => {
        if (result) {
          if (editingUser) {
            const updatedUser = { ...editingUser, ...result };
            this.usersService
              .updateUser(editingUser.id, updatedUser)
              .subscribe({
                next: (updatedUser) => {
                  this.users = this.users.map((u) =>
                    u.id === editingUser.id ? updatedUser : u
                  );
                },
                error: (err) => {
                  Swal.fire(
                    'Error',
                    'No se pudo actualizar el usuario',
                    'error'
                  );
                },
              });
          } else {
            result.createdDate = new Date();
            this.usersService.createUser(result).subscribe({
              next: (newUser) => {
                this.users = [...this.users, newUser];
              },
              error: (err) => {
                Swal.fire('Error', 'No se pudo crear el usuario', 'error');
              },
            });
          }
        }
      });
  }

  onDeleteUser(id: number): void {
    Swal.fire({
      title: '¿Estás seguro que quieres eliminar?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, borrar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.deleteUser(id).subscribe({
          next: () => {
            this.users = this.users.filter((u) => u.id !== id);
            Swal.fire('¡Borrado!', 'El usuario ha sido eliminado.', 'success');
          },
          error: (err) => {
            Swal.fire('Error', 'No se pudo eliminar el usuario', 'error');
          },
        });
      }
    });
  }
}
