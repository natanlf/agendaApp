import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { InputComponent } from './shared/input/input.component';
import { AgendaModule } from './agenda/agenda/agenda.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    AgendaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
