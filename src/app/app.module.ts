import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { RouterModule } from '@angular/router'; // Importar RouterModule
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { VoluntariosListComponent } from './features/voluntarios/list/list.component';
import { VoluntariosFormComponent } from './features/voluntarios/form/form.component';
import { ProyectosListComponent } from './features/proyectos/list/list.component';
import { ProyectosFormComponent } from './features/proyectos/form/form.component';

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
    FormsModule, // Asegúrate de incluir FormsModule
    RouterModule, // Asegúrate de incluir RouterModule
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
