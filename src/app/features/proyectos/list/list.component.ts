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
    this.loadProyectos();
  }

  loadProyectos(): void {
    this.proyectoService.getProyectos().subscribe(
      (proyectos) => {
        this.proyectos = proyectos;
      },
      (error) => {
        console.error('Error al cargar los proyectos:', error);
      }
    );
  }

  deleteProyecto(id: number): void {
    const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este proyecto?');
    if (confirmDelete) {
      this.proyectoService.deleteProyecto(id).subscribe(
        () => {
          this.loadProyectos();  // Vuelve a cargar la lista de proyectos después de eliminar
        },
        (error) => {
          console.error('Error al eliminar el proyecto:', error);
        }
      );
    }
  }
}
