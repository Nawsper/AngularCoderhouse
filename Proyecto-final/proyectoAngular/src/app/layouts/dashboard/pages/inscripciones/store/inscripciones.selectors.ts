import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripcion from './inscripciones.reducer';

export const selectInscripcionState =
  createFeatureSelector<fromInscripcion.State>(
    fromInscripcion.inscripcionFeatureKey
  );

export const selectInscripcionList = createSelector(
  selectInscripcionState,
  (s) => s.inscripciones
);

export const selectLoadingInscripcions = createSelector(
  selectInscripcionState,
  (s) => s.loadingInscripciones
);

export const selectInscripcionesError = createSelector(
  selectInscripcionState,
  (s) => s.error
);
