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
    this.voluntariosService.getVoluntarios().subscribe({
      next: (voluntarios) => {
        this.voluntarios = voluntarios;
      },
      error: (err) => {
        console.error('Error al obtener voluntarios:', err);
      }
    });
  }

  deleteVoluntario(id: number): void {
    this.voluntariosService.deleteVoluntario(id).subscribe({
      next: () => {
        // Actualizar la lista después de la eliminación
        this.loadVoluntarios();
      },
      error: (err) => {
        console.error('Error al eliminar voluntario:', err);
      }
    });
  }
}
