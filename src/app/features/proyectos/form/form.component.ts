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
    fechaInicio: new Date(),
    fechaFin: new Date(),
    totalHorasNecesarias: 0,
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
      const foundProyecto = this.proyectoService.getProyectoById(+id);
      if (foundProyecto) {
        this.proyecto = foundProyecto;
        this.isEdit = true;
      }
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.proyectoService.updateProyecto(this.proyecto);
    } else {
      this.proyectoService.addProyecto(this.proyecto);
    }
    this.router.navigate(['/proyectos']);
  }

  cancel(): void {
    this.router.navigate(['/proyectos']);
  }
}
