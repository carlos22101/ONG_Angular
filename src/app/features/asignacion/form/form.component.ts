import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignacionService } from '../../asignacion/asignacion.service';
import { VoluntariosService } from '../../../core/voluntarios.service';
import { ProyectoService } from '../../../core/proyectos.service';
import { Asignacion } from '../../asignacion/asignacion.model';

@Component({
  selector: 'app-asignacion-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  asignacion: Asignacion = {
    id: 0,
    voluntario_id: 0,
    proyecto_id: 0,
    fecha_asignacion: '',
    horas_trabajadas: 0,
    horas_semanales: 0,
    horas_mensuales: 0,
    evaluacion: '',
    comentarios: '',
  };

  voluntarios: any[] = [];  
  proyectos: any[] = [];   

  constructor(
    private asignacionService: AsignacionService,
    private voluntariosService: VoluntariosService,
    private proyectosService: ProyectoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    
    if (id) {
      this.asignacionService.getAsignacionById(id).subscribe(
        (asignacion) => {
          this.asignacion = asignacion;
          console.log("respuesta del servidor",asignacion);
          console.log("datos cargados",this.asignacion);
          
          
        },
        (error) => console.error('Error al obtener la asignación:', error)
      );
    }
    

    this.voluntariosService.getVoluntarios().subscribe(
      (voluntarios) => this.voluntarios = voluntarios,
      (error) => console.error('Error al obtener voluntarios:', error)
    );

    this.proyectosService.getProyectos().subscribe(
      (proyectos) => {
        this.proyectos = proyectos;
        console.log("respuesta del servidor -------------------",proyectos);
        
        
      },
      (error) => console.error('Error al obtener proyectos:', error)
    );
  }

  onSubmit() {
    console.log(this.asignacion.voluntario_id)

    console.log(this.asignacion.proyecto_id)
    if (this.asignacion.id) {
      this.asignacionService.updateAsignacion(this.asignacion).subscribe({
        next: () => this.router.navigate(['/asignaciones']),
        error: (err) => console.error('Error al actualizar asignación:', err)
      });
    } else {
      this.asignacionService.addAsignacion(this.asignacion).subscribe({
        next: () => this.router.navigate(['/asignaciones']),
        error: (err) => console.error('Error al agregar asignación:', err)
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/asignaciones']);
  }
}
