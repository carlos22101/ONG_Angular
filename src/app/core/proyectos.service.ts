import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private storageKey = 'proyectos';

  constructor() { }

  getProyectos() {
    const proyectos = localStorage.getItem(this.storageKey);
    return proyectos ? JSON.parse(proyectos) : [];
  }

  addProyecto(proyecto: any) {
    const proyectos = this.getProyectos();
    proyectos.push(proyecto);
    localStorage.setItem(this.storageKey, JSON.stringify(proyectos));
  }

  getProyectoById(id: number) {
    const proyectos = this.getProyectos();
    return proyectos.find((p: any) => p.id === id);
  }

  updateProyecto(proyecto: any) {
    const proyectos = this.getProyectos();
    const index = proyectos.findIndex((p: any) => p.id === proyecto.id);
    proyectos[index] = proyecto;
    localStorage.setItem(this.storageKey, JSON.stringify(proyectos));
  }

  deleteProyecto(id: number) {
    let proyectos = this.getProyectos();
    proyectos = proyectos.filter((p: any) => p.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(proyectos));
  }
}
