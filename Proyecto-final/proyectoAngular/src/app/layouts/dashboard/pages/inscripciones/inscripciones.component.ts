import { Component, OnInit } from '@angular/core';
import { IInscripcion } from './models';
import { Store } from '@ngrx/store';
import {
  selectInscripcionList,
  selectInscripcionesError,
  selectLoadingInscripcions,
} from './store/inscripciones.selectors';
import { InscripcionActions } from './store/inscripciones.actions';
import { Observable } from 'rxjs';

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

  loadingInscripciones$: Observable<boolean>;
  error$: Observable<unknown>;
  inscripciones$: Observable<IInscripcion[]>;
  constructor(private store: Store) {
    this.loadingInscripciones$ = this.store.select(selectLoadingInscripcions);
    this.inscripciones$ = this.store.select(selectInscripcionList);
    this.error$ = this.store.select(selectInscripcionesError);
  }

  ngOnInit(): void {
    this.loadInscrip();
  }

  loadInscrip() {
    this.store.dispatch(InscripcionActions.loadInscripciones());
  }
}
