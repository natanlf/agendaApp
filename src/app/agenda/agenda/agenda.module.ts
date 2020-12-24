import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaFormComponent } from './agenda-form/agenda-form.component';
import { CoreModule } from 'src/app/shared/core/core.module';

@NgModule({
  declarations: [
    AgendaFormComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    AgendaFormComponent
  ]
})
export class AgendaModule { }
