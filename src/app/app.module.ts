import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Asegúrate de importar RouterModule
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VoluntariosListComponent } from './features/voluntarios/list/list.component'; // Asegúrate de importar este componente
import { VoluntariosFormComponent } from './features/voluntarios/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    VoluntariosListComponent,  // Asegúrate de declarar el componente de la lista de voluntarios
    VoluntariosFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),  // Asegúrate de que RouterModule esté en los imports
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
