import { IClase } from '../../clases/models/clase.model';
import { IUser } from '../../users/models';

export interface IInscripcion {
  id: number;
  clase: IClase;
  alumno: IUser;
  fecha_inscripcion: Date;
}

export interface IInscripcionData {
  clase: IClase;
  alumno: IUser;
  fecha_inscripcion: Date;
}
