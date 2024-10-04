import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {
  private storageKey = 'voluntarios';

  constructor() { }

  getVoluntarios() {
    const voluntarios = localStorage.getItem(this.storageKey);
    if (voluntarios) {
      return JSON.parse(voluntarios);
    } else {
      return [];
    }
  }

  addVoluntario(voluntario: any) {
    const voluntarios = this.getVoluntarios();
    voluntario.id = this.generateNewId(voluntarios);
    voluntarios.push(voluntario);
    localStorage.setItem(this.storageKey, JSON.stringify(voluntarios));
  }

  getVoluntarioById(id: number) {
    const voluntarios = this.getVoluntarios();
    for (let i = 0; i < voluntarios.length; i++) {
      if (voluntarios[i].id === id) {
        return voluntarios[i];
      }
    }
    return null;
  }

  updateVoluntario(voluntario: any) {
    const voluntarios = this.getVoluntarios();
    for (let i = 0; i < voluntarios.length; i++) {
      if (voluntarios[i].id === voluntario.id) {
        voluntarios[i] = voluntario;
        break;
      }
    }
    localStorage.setItem(this.storageKey, JSON.stringify(voluntarios));
  }

  deleteVoluntario(id: number) {
    const voluntarios = this.getVoluntarios();
    const nuevosVoluntarios = [];
    for (let i = 0; i < voluntarios.length; i++) {
      if (voluntarios[i].id !== id) {
        nuevosVoluntarios.push(voluntarios[i]);
      }
    }
    localStorage.setItem(this.storageKey, JSON.stringify(nuevosVoluntarios));
  }

  private generateNewId(voluntarios: any[]): number {
    let maxId = 0;
    for (let i = 0; i < voluntarios.length; i++) {
      if (voluntarios[i].id > maxId) {
        maxId = voluntarios[i].id;
      }
    }
    return maxId + 1;
  }
}
