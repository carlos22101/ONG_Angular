import { Injectable } from '@angular/core';
import { Voluntario } from '../models/voluntario';

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {
  private key = 'voluntarios';

  constructor() { }

  // Obtener todos los voluntarios del localStorage
  getVoluntarios(): Voluntario[] {
    const voluntarios = localStorage.getItem(this.key);
    return voluntarios ? JSON.parse(voluntarios) : [];
  }

  // Agregar un nuevo voluntario
  addVoluntario(voluntario: Voluntario): void {
    const voluntarios = this.getVoluntarios();
    voluntario.id = Date.now(); // Generar un ID único
    voluntarios.push(voluntario);
    localStorage.setItem(this.key, JSON.stringify(voluntarios));
  }

  // Actualizar un voluntario existente
  updateVoluntario(voluntario: Voluntario): void {
    let voluntarios = this.getVoluntarios();
    voluntarios = voluntarios.map(v => v.id === voluntario.id ? voluntario : v);
    localStorage.setItem(this.key, JSON.stringify(voluntarios));
  }

  // Eliminar un voluntario por ID
  deleteVoluntario(id: number): void {
    const voluntarios = this.getVoluntarios();
    const filteredVoluntarios = voluntarios.filter(v => v.id !== id);
    localStorage.setItem(this.key, JSON.stringify(filteredVoluntarios));
  }
}
