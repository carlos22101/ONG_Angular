import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root',
})
export class ProyectoService {
  private proyectosKey = 'proyectos';

  constructor() {}

  
  getProyectos(): Proyecto[] {
    const proyectos = localStorage.getItem(this.proyectosKey);
    return proyectos ? JSON.parse(proyectos) : [];
  }

  
  getProyectoById(id: number): Proyecto | undefined {
    const proyectos = this.getProyectos();
    return proyectos.find((p) => p.id_proyecto === id);
  }

  
  addProyecto(proyecto: Proyecto): void {
    const proyectos = this.getProyectos();
    proyecto.id_proyecto = this.generateId();
    proyectos.push(proyecto);
    localStorage.setItem(this.proyectosKey, JSON.stringify(proyectos));
  }


  updateProyecto(proyecto: Proyecto): void {
    const proyectos = this.getProyectos();
    const index = proyectos.findIndex((p) => p.id_proyecto === proyecto.id_proyecto);
    if (index !== -1) {
      proyectos[index] = proyecto;
      localStorage.setItem(this.proyectosKey, JSON.stringify(proyectos));
    }
  }

  
  deleteProyecto(id: number): void {
    const proyectos = this.getProyectos();
    const filtered = proyectos.filter((p) => p.id_proyecto !== id);
    localStorage.setItem(this.proyectosKey, JSON.stringify(filtered));
  }


  private generateId(): number {
    const proyectos = this.getProyectos();
    return proyectos.length > 0 ? Math.max(...proyectos.map((p) => p.id_proyecto)) + 1 : 1;
  }
}