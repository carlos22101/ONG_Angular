import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../../core/proyectos.service';
import { Proyecto } from '../../../models/proyecto';

@Component({
  selector: 'app-proyectos-list',
  templateUrl: './list.component.html',
})
export class ProyectosListComponent implements OnInit {
  proyectos: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService) {}

  ngOnInit(): void {
    this.proyectos = this.proyectoService.getProyectos();
  }

  deleteProyecto(id: number): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este proyecto?');
    if (confirmDelete) {
      this.proyectoService.deleteProyecto(id);
      this.proyectos = this.proyectoService.getProyectos(); 
    }
  }
}
