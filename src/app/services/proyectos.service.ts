import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private apiUrl = 'https://your-api-url.com/api/proyectos';

  constructor(private http: HttpClient) {}

  getProyectos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  getProyectoById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addProyecto(proyecto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, proyecto);
  }

  updateProyecto(id: string, proyecto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, proyecto);
  }

  deleteProyecto(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
