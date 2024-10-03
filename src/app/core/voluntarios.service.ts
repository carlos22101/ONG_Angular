import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {
  private storageKey = 'voluntarios';

  constructor() { }

  getVoluntarios() {
    const voluntarios = localStorage.getItem(this.storageKey);
    return voluntarios ? JSON.parse(voluntarios) : [];
  }

  addVoluntario(voluntario: any) {
    const voluntarios = this.getVoluntarios();
    voluntarios.push(voluntario);
    localStorage.setItem(this.storageKey, JSON.stringify(voluntarios));
  }

  getVoluntarioById(id: number) {
    const voluntarios = this.getVoluntarios();
    return voluntarios.find((v: any) => v.id === id);
  }

  updateVoluntario(voluntario: any) {
    const voluntarios = this.getVoluntarios();
    const index = voluntarios.findIndex((v: any) => v.id === voluntario.id);
    voluntarios[index] = voluntario;
    localStorage.setItem(this.storageKey, JSON.stringify(voluntarios));
  }

  deleteVoluntario(id: number) {
    let voluntarios = this.getVoluntarios();
    voluntarios = voluntarios.filter((v: any) => v.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(voluntarios));
  }
}
