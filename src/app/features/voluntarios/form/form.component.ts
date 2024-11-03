import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { VoluntariosService } from '../../../core/voluntarios.service';
import { Voluntario } from '../../../models/voluntario';

@Component({
  selector: 'app-voluntarios-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class VoluntariosFormComponent implements OnInit {

  voluntario: Voluntario = {
    id: 0, 
    nombre: '',
    apellido: '',
    correo: '',
    area_interes: '',
    disponibilidad_horaria: '',
    cuota_horas: 0,
    estado: 'activo' 
  };

  isEdit: boolean = false;

  constructor(
    private voluntarioService: VoluntariosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      // Obtener el voluntario desde la API
      this.voluntarioService.getVoluntarioById(+id).subscribe({
        next: (voluntario) => {
          this.voluntario = voluntario;
        },
        error: (err) => {
          console.error('Error al obtener voluntario:', err);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      // Actualizar voluntario en la API
      this.voluntarioService.updateVoluntario(this.voluntario).subscribe({
        next: () => {
          this.router.navigate(['/voluntarios']);
        },
        error: (err) => {
          console.error('Error al actualizar voluntario:', err);
        }
      });
    } else {
      // Agregar nuevo voluntario en la API
      this.voluntarioService.addVoluntario(this.voluntario).subscribe({
        next: () => {
          this.router.navigate(['/voluntarios']);
        },
        error: (err) => {
          console.error('Error al agregar voluntario:', err);
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/voluntarios']);
  }
}
