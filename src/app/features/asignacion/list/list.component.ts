import { Component, OnInit } from '@angular/core';
import { AsignacionService } from '../../asignacion/asignacion.service';
import { Asignacion } from '../../asignacion/asignacion.model';

@Component({
  selector: 'app-asignacion-list',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  asignaciones: Asignacion[] = [];

  constructor(private asignacionService: AsignacionService) {}

  ngOnInit(): void {
    this.loadAsignaciones();
  }

  loadAsignaciones(): void {
    this.asignacionService.getAsignaciones().subscribe({
      next: (data) => this.asignaciones = data,
      error: (err) => console.error('Error al obtener asignaciones:', err)
    });
  }

  deleteAsignacion(id: number): void {
    this.asignacionService.deleteAsignacion(id).subscribe({
      next: () => this.loadAsignaciones(), 
      error: (err) => console.error('Error al eliminar asignación:', err)
    });
  }
}
