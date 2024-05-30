import { Injectable } from '@angular/core';
import { IClase, CreateClasePayload } from './models/clase.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClasesService {
  constructor(private http: HttpClient) {}

  getClases(): Observable<IClase[]> {
    return this.http.get<IClase[]>(environment.baseAPIURL + '/clases');
  }

  getClaseById(id: number): Observable<IClase | undefined> {
    return this.http.get<IClase>(`${environment.baseAPIURL}/clases/${id}`);
  }

  createClases(payload: CreateClasePayload): Observable<IClase> {
    return this.http.post<IClase>(`${environment.baseAPIURL}/clases`, payload);
  }

  updateClase(id: number, payload: CreateClasePayload): Observable<IClase> {
    return this.http.put<IClase>(
      `${environment.baseAPIURL}/clases/${id}`,
      payload
    );
  }

  deleteClase(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.baseAPIURL}/clases/${id}`);
  }
}
