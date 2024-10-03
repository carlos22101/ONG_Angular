import { Component, OnInit } from '@angular/core';
import { VoluntariosService } from '../../../core/voluntarios.service';

@Component({
  selector: 'app-voluntarios-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class VoluntariosListComponent implements OnInit {
  voluntarios: any[] = [];

  constructor(private voluntariosService: VoluntariosService) { }

  ngOnInit(): void {
    this.voluntarios = this.voluntariosService.getVoluntarios();
  }

  deleteVoluntario(id: number): void {
    this.voluntariosService.deleteVoluntario(id);
    this.voluntarios = this.voluntariosService.getVoluntarios(); // actualizar la lista
  }
}
