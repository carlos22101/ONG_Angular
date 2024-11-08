import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    FormComponent,
    ListComponent
  ]
})
export class AsignacionModule { }
