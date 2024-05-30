import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionActions } from './inscripciones.actions';
import { IInscripcion } from '../models';

export const inscripcionFeatureKey = 'inscripcion';

export interface State {
  loadingInscripciones: boolean;
  inscripciones: IInscripcion[];
  error: unknown;
}

export const initialState: State = {
  loadingInscripciones: false,
  inscripciones: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(InscripcionActions.loadInscripciones, (state) => {
    return {
      ...state,
      loadInscripciones: true,
    };
  }),

  on(InscripcionActions.loadInscripcionesSuccess, (state, action) => {
    return {
      ...state,
      inscripciones: action.data,
      loadingInscripciones: false,
    };
  }),

  on(InscripcionActions.loadInscripcionesFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      loadingInscripciones: false,
    };
  })
);

export const inscripcionFeature = createFeature({
  name: inscripcionFeatureKey,
  reducer,
});
