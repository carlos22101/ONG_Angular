import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../../models/proyecto';
import { ProyectoService } from '../../../core/proyectos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proyectos-form',
  templateUrl: './form.component.html',
})
export class ProyectosFormComponent implements OnInit {
  proyecto: Proyecto = {
    id_proyecto: 0,
    nombre: '',
    descripcion: '',
    responsable: '',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
    total_horas_necesarias: 0,
  };
  isEdit = false;

  constructor(
    private proyectoService: ProyectoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.proyectoService.getProyectoById(+id).subscribe(
        (foundProyecto: Proyecto) => {
          this.proyecto = foundProyecto;
          this.isEdit = true;
        },
        (error) => {
          console.error('Error al obtener el proyecto:', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.proyectoService.updateProyecto(this.proyecto).subscribe(
        () => {
          this.router.navigate(['/proyectos']);
        },
        (error) => {
          console.error('Error al actualizar el proyecto:', error);
        }
      );
    } else {
      this.proyectoService.addProyecto(this.proyecto).subscribe(
        () => {
          this.router.navigate(['/proyectos']);
        },
        (error) => {
          console.error('Error al agregar el proyecto:', error);
        }
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/proyectos']);
  }
}
