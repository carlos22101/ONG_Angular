import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { AsignacionService } from '../../asignacion/asignacion.service';
import { Asignacion } from '../../asignacion/asignacion.model';

@Component({
  selector: 'app-asignacion-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
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

  constructor(private asignacionService: AsignacionService, private router: Router, private route : ActivatedRoute) {}
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      // Si hay un id en la ruta, cargamos la asignación para editar
      this.asignacionService.getAsignacionById(id).subscribe(
        (asignacion) => {
          this.asignacion = asignacion;
        },
        (error) => {
          console.error('Error al obtener la asignación:', error);
        }
      );
    }
  }

  onSubmit() {
    if (this.asignacion.id) {
      // Actualizar asignación
      this.asignacionService.updateAsignacion(this.asignacion).subscribe({
        next: () => this.router.navigate(['/asignaciones']),
        error: (err) => console.error('Error al actualizar asignación:', err)
      });
    } else {
      // Agregar nueva asignación
      this.asignacionService.addAsignacion(this.asignacion).subscribe({
        next: () => this.router.navigate(['/asignaciones']),
        error: (err) => console.error('Error al agregar asignación:', err)
      });
    }
  }
  cancel():void{
    this.router.navigate(['/asignaciones'])
  }
}
