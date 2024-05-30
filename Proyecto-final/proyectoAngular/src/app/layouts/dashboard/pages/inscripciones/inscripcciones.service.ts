import { Injectable } from '@angular/core';
import { IInscripcion, IInscripcionData } from './models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

let INSCRIP_DB: IInscripcion[] = [
  {
    id: 1,
    clase: {
      id: 2,
      nombre: 'Danzas Contemporáneas',
      descripcion:
        'Explora la expresión artística a través de movimientos libres y no convencionales. Las danzas contemporáneas combinan elementos de diferentes estilos y suelen reflejar temas sociales y emocionales.',
    },
    alumno: {
      id: 4,
      firstName: 'Emily',
      lastName: 'Brown',
      email: 'emily.brown@example.com',
      role: 'admin',
      createdDate: new Date(),
    },
    fecha_inscripcion: new Date(),
  },
  {
    id: 2,
    clase: {
      id: 3,
      nombre: 'Clase de Hip-Hop',
      descripcion:
        'Diviértete aprendiendo movimientos de hip-hop moderno, incluyendo pasos básicos, popping, locking y coreografías de música actual. Perfecto para quienes disfrutan de la música urbana y el baile callejero.',
    },
    alumno: {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      role: 'profesor',
      createdDate: new Date(),
    },
    fecha_inscripcion: new Date(),
  },
];

@Injectable({ providedIn: 'root' })
export class InscripcionesService {
  constructor(private http: HttpClient) {}

  getInscrip(): Observable<IInscripcion[]> {
    return this.http.get<IInscripcion[]>(
      `${environment.baseAPIURL}/inscripciones`
    );
  }
  createInscrip(data: IInscripcionData) {
    INSCRIP_DB.push({ ...data, id: new Date().getTime() });
    return of(INSCRIP_DB);
  }
  updateInscrip(id: number, data: IInscripcion) {
    return of(
      INSCRIP_DB.map((inscrip) =>
        inscrip.id === id ? { ...inscrip, ...data } : inscrip
      )
    );
  }
  deleteInscrip(id: number) {
    return of(INSCRIP_DB.filter((inscrip) => inscrip.id != id));
  }
}
