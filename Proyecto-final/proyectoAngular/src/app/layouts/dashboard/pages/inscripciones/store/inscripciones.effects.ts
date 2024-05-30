import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { InscripcionActions } from './inscripciones.actions';
import { InscripcionesService } from '../inscripcciones.service';

@Injectable()
export class InscripcionEffects {
  loadInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionActions.loadInscripciones),
      concatMap(() =>
        this.inscripcionesService.getInscrip().pipe(
          map((data) => InscripcionActions.loadInscripcionesSuccess({ data })),
          catchError((error) =>
            of(InscripcionActions.loadInscripcionesFailure({ error }))
          )
        )
      )
    );
  });
  constructor(
    private actions$: Actions,
    private inscripcionesService: InscripcionesService
  ) {}
}
