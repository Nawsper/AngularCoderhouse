import { Injectable } from '@angular/core';
import { IInscripcion, IInscripcionData } from './models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class InscripcionesService {
  constructor(private http: HttpClient) {}

  getInscrip(): Observable<IInscripcion[]> {
    return this.http.get<IInscripcion[]>(
      `${environment.baseAPIURL}/inscripciones`
    );
  }

  getInscripById(id: number): Observable<IInscripcion | undefined> {
    return this.http.get<IInscripcion>(
      `${environment.baseAPIURL}/inscripciones/${id}`
    );
  }

  createInscrip(payload: IInscripcionData): Observable<IInscripcion> {
    return this.http.post<IInscripcion>(
      `${environment.baseAPIURL}/inscripciones`,
      payload
    );
  }

  updateInscrip(
    id: number,
    payload: IInscripcionData
  ): Observable<IInscripcion> {
    return this.http.put<IInscripcion>(
      `${environment.baseAPIURL}/inscripciones/${id}`,
      payload
    );
  }

  deleteInscrip(id: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.baseAPIURL}/inscripciones/${id}`
    );
  }
}
