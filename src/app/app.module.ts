import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { VoluntariosListComponent } from './features/voluntarios/list/list.component';
import { VoluntariosFormComponent } from './features/voluntarios/form/form.component';
import { ProyectosListComponent } from './features/proyectos/list/list.component';
import { ProyectosFormComponent } from './features/proyectos/form/form.component';
import { AsignacionModule } from './features/asignacion/asignacion.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VoluntariosListComponent,
    VoluntariosFormComponent,
    ProyectosListComponent,
    ProyectosFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule, 
    AppRoutingModule,
    AsignacionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
