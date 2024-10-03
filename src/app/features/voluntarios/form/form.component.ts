import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    areaInteres: '',
    disponibilidadHoraria: '',
    cuotaHoras: 0,
    estado: 'Activo'
  };

  isEdit: boolean = false;

  constructor(
    private voluntariosService: VoluntariosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.voluntario = this.voluntariosService.getVoluntarios().find(v => v.id == id) || this.voluntario;
      this.isEdit = true;
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.voluntariosService.updateVoluntario(this.voluntario);
    } else {
      this.voluntario.id = Date.now();  // Generar un ID único
      this.voluntariosService.addVoluntario(this.voluntario);
    }
    this.router.navigate(['/voluntarios']);
  }

  cancel(): void {
    this.router.navigate(['/voluntarios']);
  }
}
