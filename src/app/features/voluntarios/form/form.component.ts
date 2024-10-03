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
    id: 0, // Valor inicial temporal
    nombre: '',
    apellido: '',
    correo: '',
    areaInteres: '',
    disponibilidadHoraria: '',
    cuotaHoras: 0,
    estado: 'activo' // Estado predeterminado
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
      const storedVoluntarios = this.voluntarioService.getVoluntarios();
      const voluntario = storedVoluntarios.find((v: Voluntario) => v.id === +id);
      if (voluntario) {
        this.voluntario = voluntario;
      }
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.voluntarioService.updateVoluntario(this.voluntario);
    } else {
      this.voluntarioService.addVoluntario(this.voluntario);
    }
    this.router.navigate(['/voluntarios']);
  }

  cancel(): void {
    this.router.navigate(['/voluntarios']);
  }
}
