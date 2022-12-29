import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { ModalFormularioComponent } from './componentes/modal-formulario/modal-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AplicacionComponent } from './componentes/aplicacion/aplicacion.component';
import { ModalEdicionComponent } from './componentes/modal-edicion/modal-edicion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    ModalFormularioComponent,
    AplicacionComponent,
    ModalEdicionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
