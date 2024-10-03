import { Component, OnInit } from '@angular/core';
import { VoluntariosService } from '../../../core/voluntarios.service';
import { Voluntario } from '../../../models/voluntario';

@Component({
  selector: 'app-voluntarios-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class VoluntariosListComponent implements OnInit {
  voluntarios: Voluntario[] = [];

  constructor(private voluntariosService: VoluntariosService) { }

  ngOnInit(): void {
    this.loadVoluntarios();
  }

  loadVoluntarios(): void {
    this.voluntarios = this.voluntariosService.getVoluntarios();
  }

  deleteVoluntario(id: number): void {
    if (confirm('¿Estás seguro de eliminar este voluntario?')) {
      this.voluntariosService.deleteVoluntario(id);
      this.loadVoluntarios(); // Recargar la lista después de eliminar
    }
  }
}
