import { Component } from '@angular/core';
import { AsignacionService } from '../../asignacion/asignacion.service';
import { Asignacion } from '../../asignacion/asignacion.model';

@Component({
  selector: 'app-asignacion-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  asignaciones: Asignacion[] = [];

  constructor(private asignacionService: AsignacionService) {
    this.asignaciones = this.asignacionService.getAsignaciones();
  }

  deleteAsignacion(id: number) {
    this.asignacionService.deleteAsignacion(id);
    this.asignaciones = this.asignacionService.getAsignaciones();
  }
}
