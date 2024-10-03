import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { VoluntariosListComponent } from './features/voluntarios/list/list.component';
import { VoluntariosFormComponent } from './features/voluntarios/form/form.component';
import { ProyectosListComponent } from './features/proyectos/list/list.component';
import { ProyectosFormComponent } from './features/proyectos/form/form.component';

import { AppRoutingModule } from './app-routing.module'; 

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
    AppRoutingModule, // Asegúrate de incluir el AppRoutingModule
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
