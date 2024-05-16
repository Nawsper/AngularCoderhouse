import { Injectable } from '@angular/core';
import { IClase } from './models/clase.model';
import { of, Observable, delay } from 'rxjs';

const CLASES_DB: IClase[] = [
  {
    id: 1,
    nombre: 'Danzas Clásicas',
    descripcion:
      'Aprende los fundamentos del ballet clásico, incluyendo posturas, movimientos y técnicas tradicionales. Este estilo de danza es conocido por su elegancia y disciplina.',
  },
  {
    id: 2,
    nombre: 'Danzas Contemporáneas',
    descripcion:
      'Explora la expresión artística a través de movimientos libres y no convencionales. Las danzas contemporáneas combinan elementos de diferentes estilos y suelen reflejar temas sociales y emocionales.',
  },
  {
    id: 3,
    nombre: 'Clase de Hip-Hop',
    descripcion:
      'Diviértete aprendiendo movimientos de hip-hop moderno, incluyendo pasos básicos, popping, locking y coreografías de música actual. Perfecto para quienes disfrutan de la música urbana y el baile callejero.',
  },
  {
    id: 4,
    nombre: 'Clases de Urbano',
    descripcion:
      'Explora una mezcla de estilos urbanos como breakdance, krumping, y otros movimientos callejeros. Aprende sobre la cultura del baile urbano y desarrolla tu estilo propio en un ambiente divertido y dinámico.',
  },
  {
    id: 5,
    nombre: 'Danzas Árabes',
    descripcion:
      'Sumérgete en la belleza y elegancia de las danzas árabes, que incluyen movimientos fluidos de cadera, brazos y manos. Aprende sobre la cultura y tradiciones que inspiran esta forma de expresión artística.',
  },
  {
    id: 6,
    nombre: 'Danzas Folklóricas',
    descripcion:
      'Descubre la riqueza cultural a través de las danzas folklóricas, que reflejan las tradiciones y costumbres de diferentes regiones del mundo. Aprende pasos auténticos y disfruta de la diversidad de la danza tradicional.',
  },
  {
    id: 7,
    nombre: 'Clases Infantiles',
    descripcion:
      'Introduce a los más pequeños al mundo del baile con clases diseñadas especialmente para niños. Desarrolla su coordinación, creatividad y confianza a través de juegos y actividades divertidas.',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ClasesService {
  getClases(): Observable<IClase[]> {
    return of(CLASES_DB).pipe(delay(1000));
  }

  getClaseById(id: number): Observable<IClase | undefined> {
    return of(CLASES_DB.find((el) => el.id === id)).pipe(delay(1000));
  }
}
