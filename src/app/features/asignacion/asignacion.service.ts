import { Injectable } from '@angular/core';
import { Asignacion } from './asignacion.model';

@Injectable({
  providedIn: 'root',
})
export class AsignacionService {
  private asignaciones: Asignacion[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('asignaciones', JSON.stringify(this.asignaciones));
  }

  private loadFromLocalStorage() {
    const data = localStorage.getItem('asignaciones');
    if (data) {
      this.asignaciones = JSON.parse(data);
    }
  }

  getAsignaciones(): Asignacion[] {
    return this.asignaciones;
  }

  addAsignacion(asignacion: Asignacion) {
    asignacion.id = this.asignaciones.length > 0 ? this.asignaciones[this.asignaciones.length - 1].id + 1 : 1;
    this.asignaciones.push(asignacion);
    this.saveToLocalStorage();
  }

  updateAsignacion(asignacion: Asignacion) {
    const index = this.asignaciones.findIndex(a => a.id === asignacion.id);
    if (index > -1) {
      this.asignaciones[index] = asignacion;
      this.saveToLocalStorage();
    }
  }

  deleteAsignacion(id: number) {
    this.asignaciones = this.asignaciones.filter(a => a.id !== id);
    this.saveToLocalStorage();
  }

  getAsignacionById(id: number): Asignacion | undefined {
    return this.asignaciones.find(a => a.id === id);
  }
}
