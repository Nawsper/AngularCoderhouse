import { Component, OnInit } from '@angular/core';
import { IClase } from './models/clase.model';
import { ClasesService } from './clases.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.scss',
})
export class ClasesComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'descripcion', 'actions'];

  clases: IClase[] = [];

  loading = false;

  constructor(private clasesService: ClasesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.clasesService.getClases().subscribe({
      next: (users) => {
        console.log('next: ', users);
        this.clases = users;
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
}
