import { Injectable } from '@angular/core';
import { Voluntario } from '../models/voluntario';

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {
  private key = 'voluntarios';

  getVoluntarios(): Voluntario[] {
    const voluntarios = localStorage.getItem(this.key);
    return voluntarios ? JSON.parse(voluntarios) : [];
  }

  addVoluntario(voluntario: Voluntario): void {
    const voluntarios = this.getVoluntarios();
    voluntarios.push(voluntario);
    localStorage.setItem(this.key, JSON.stringify(voluntarios));
  }

  updateVoluntario(voluntario: Voluntario): void {
    let voluntarios = this.getVoluntarios();
    voluntarios = voluntarios.map(v => v.id === voluntario.id ? voluntario : v);
    localStorage.setItem(this.key, JSON.stringify(voluntarios));
  }

  deleteVoluntario(id: number): void {
    const voluntarios = this.getVoluntarios();
    const filteredVoluntarios = voluntarios.filter(v => v.id !== id);
    localStorage.setItem(this.key, JSON.stringify(filteredVoluntarios));
  }
}

