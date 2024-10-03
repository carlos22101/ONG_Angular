import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { VoluntariosListComponent } from './features/voluntarios/list/list.component';
import { VoluntariosFormComponent } from './features/voluntarios/form/form.component';
import { ProyectosListComponent } from './features/proyectos/list/list.component';
import { ProyectosFormComponent } from './features/proyectos/form/form.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: "", component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'voluntarios', component: VoluntariosListComponent },
  { path: 'voluntarios/add', component: VoluntariosFormComponent },
  { path: 'voluntarios/edit/:id', component: VoluntariosFormComponent },
  { path: 'proyectos', component: ProyectosListComponent },
  { path: 'proyectos/add', component: ProyectosFormComponent },
  { path: 'proyectos/edit/:id', component: ProyectosFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
