import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  private proyectosKey = 'proyectos';

  constructor() {}

  // Obtener todos los proyectos
  getProyectos(): Proyecto[] {
    const proyectos = localStorage.getItem(this.proyectosKey);
    return proyectos ? JSON.parse(proyectos) : [];
  }

  // Obtener un proyecto por ID
  getProyectoById(id: number): Proyecto | undefined {
    const proyectos = this.getProyectos();
    return proyectos.find((p) => p.id_proyecto === id);
  }

  // Agregar un nuevo proyecto
  addProyecto(proyecto: Proyecto): void {
    const proyectos = this.getProyectos();
    proyecto.id_proyecto = this.generateId();
    proyectos.push(proyecto);
    localStorage.setItem(this.proyectosKey, JSON.stringify(proyectos));
  }

  // Actualizar un proyecto existente
  updateProyecto(proyecto: Proyecto): void {
    const proyectos = this.getProyectos();
    const index = proyectos.findIndex((p) => p.id_proyecto === proyecto.id_proyecto);
    if (index !== -1) {
      proyectos[index] = proyecto;
      localStorage.setItem(this.proyectosKey, JSON.stringify(proyectos));
    }
  }

  // Eliminar un proyecto
  deleteProyecto(id: number): void {
    const proyectos = this.getProyectos();
    const filtered = proyectos.filter((p) => p.id_proyecto !== id);
    localStorage.setItem(this.proyectosKey, JSON.stringify(filtered));
  }

  // Generar un ID para nuevos proyectos
  private generateId(): number {
    const proyectos = this.getProyectos();
    return proyectos.length > 0 ? Math.max(...proyectos.map((p) => p.id_proyecto)) + 1 : 1;
  }
}
