import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private key = 'proyectos';

  constructor() { }

  // Obtener todos los proyectos del localStorage
  getProyectos(): Proyecto[] {
    const proyectos = localStorage.getItem(this.key);
    return proyectos ? JSON.parse(proyectos) : [];
  }

  // Agregar un nuevo proyecto
  addProyecto(proyecto: Proyecto): void {
    const proyectos = this.getProyectos();
    proyecto.id = Date.now(); // Generar un ID único
    proyectos.push(proyecto);
    localStorage.setItem(this.key, JSON.stringify(proyectos));
  }

  // Actualizar un proyecto existente
  updateProyecto(proyecto: Proyecto): void {
    let proyectos = this.getProyectos();
    proyectos = proyectos.map(p => p.id === proyecto.id ? proyecto : p);
    localStorage.setItem(this.key, JSON.stringify(proyectos));
  }

  // Eliminar un proyecto por ID
  deleteProyecto(id: number): void {
    const proyectos = this.getProyectos();
    const filteredProyectos = proyectos.filter(p => p.id !== id);
    localStorage.setItem(this.key, JSON.stringify(filteredProyectos));
  }
}
