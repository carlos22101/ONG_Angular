import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  private apiUrl = 'http://52.70.189.53:3000/api/proyectos'; // Ajusta la URL según tu API

  constructor(private http: HttpClient) {}

  // Obtener todos los proyectos
  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.apiUrl);
  }

  // Obtener proyecto por ID
  getProyectoById(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(`${this.apiUrl}/${id}`);
  }

  // Añadir un nuevo proyecto
  addProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.apiUrl, proyecto);
  }

  // Actualizar un proyecto existente
  updateProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(`${this.apiUrl}/${proyecto.id_proyecto}`, proyecto);
  }

  // Eliminar un proyecto por ID
  deleteProyecto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
