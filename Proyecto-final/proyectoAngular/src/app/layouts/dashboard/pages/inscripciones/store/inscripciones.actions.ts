import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IInscripcion } from '../models';

export const InscripcionActions = createActionGroup({
  source: 'Inscripcion',
  events: {
    'Load Inscripciones': emptyProps(),
    'Load Inscripciones Success': props<{ data: IInscripcion[] }>(),
    'Load Inscripciones Failure': props<{ error: unknown }>(),
  },
});