import { Component, OnInit } from '@angular/core';
import { InscripcionesService } from './inscripcciones.service';
import { IInscripcion } from './models';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss',
})
export class InscripcionesComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nombre',
    'email',
    'userName',
    'fecha_inscripcion',
  ];

  loading = false;
  inscrip: IInscripcion[] = [];
  constructor(private inscripcionService: InscripcionesService) {}

  ngOnInit(): void {
    this.loading = true;
    this.loadInscrip();
  }

  loadInscrip() {
    this.inscripcionService.getInscrip().subscribe({
      next: (inscrip) => {
        this.inscrip = inscrip;
      },
      error: () => {},
      complete: () => {
        this.loading = false;
      },
    });
  }
}
