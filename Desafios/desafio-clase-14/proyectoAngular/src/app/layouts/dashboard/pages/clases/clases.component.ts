import { Component, OnInit } from '@angular/core';
import { IClase } from './models/clase.model';
import { MatDialog } from '@angular/material/dialog';
import { ClasesDialogComponent } from './components/clases-dialog/clases-dialog.component';
import Swal from 'sweetalert2';
import { ClasesService } from './clases.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.scss',
})
export class ClasesComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'descripcion', 'actions'];

  clases: IClase[] = [];

  loading = false;

  constructor(
    private matDialog: MatDialog,
    private clasesService: ClasesService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.clasesService.getClases().subscribe({
      next: (clases) => {
        console.log('Clases cargadas:', clases);
        this.clases = clases;
      },
      error: (err) => {
        console.log('Error al cargar clases:', err);
        Swal.fire('Error', 'Ocurrió un error al cargar las clases', 'error');
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  openDialog(signUpClass?: IClase): void {
    this.matDialog
      .open(ClasesDialogComponent, { data: signUpClass })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          setTimeout(() => {
            Swal.fire(
              '¡Inscripción Exitosa!',
              'El formulario fue enviado correctamente',
              'success'
            );
          }, 500);
        }
      });
  }
}
