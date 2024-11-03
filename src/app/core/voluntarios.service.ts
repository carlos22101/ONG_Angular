import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voluntario } from '../models/voluntario'; 

@Injectable({
  providedIn: 'root',
})
export class VoluntariosService {
  private apiUrl = 'http://localhost:3000/api/voluntarios';

  constructor(private http: HttpClient) {}

  // Obtener todos los voluntarios
  getVoluntarios(): Observable<Voluntario[]> {
    return this.http.get<Voluntario[]>(this.apiUrl);
  }

  // Agregar un voluntario
  addVoluntario(voluntario: Voluntario): Observable<Voluntario> {
    return this.http.post<Voluntario>(this.apiUrl, voluntario);
  }

  // Obtener un voluntario por ID
  getVoluntarioById(id: number): Observable<Voluntario> {
    return this.http.get<Voluntario>(`${this.apiUrl}/${id}`);
  }

  // Actualizar un voluntario
  updateVoluntario(voluntario: Voluntario): Observable<Voluntario> {
    return this.http.put<Voluntario>(`${this.apiUrl}/${voluntario.id}`, voluntario);
  }

  // Eliminar un voluntario por ID
  deleteVoluntario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
