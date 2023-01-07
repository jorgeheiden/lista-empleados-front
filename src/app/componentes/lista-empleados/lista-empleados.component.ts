import { ActualizarVistaService } from './../../servicios/actualizar-vista.service';

import { ServiceService } from './../../servicios/service.service';
import { Empleado } from './../../interfaces/empleado';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss'],
})
export class ListaEmpleadosComponent implements OnInit {
  empleados!: Empleado[];
  verModal: boolean = true;
  @Output() verModalEvent = new EventEmitter<boolean>();
  empleadoParaEdicion!: Empleado;
  @Output() empladoEdicionEvent = new EventEmitter<Empleado>();
  verModalEdicion: boolean = true;
  @Output() modalEdicionEvent = new EventEmitter<boolean>();
  verModalEliminar = false;
  idRegistro!: number;

  constructor(
    private servicio: ServiceService,
    private actualizarVistaService: ActualizarVistaService
  ) {}

  ngOnInit(): void {
    this.obtenerListaDeEmpleados();

    this.actualizarVistaService.getVista().subscribe((data) => {
      this.obtenerListaDeEmpleados();
    });
  }

  obtenerListaDeEmpleados() {
    this.servicio.getEmplados().subscribe((data) => {
      this.empleados = data;
    });
  }

  modal() {
    this.verModalEvent.emit(this.verModal);
    if (this.verModal == true) {
      this.verModal = false;
    } else {
      this.verModal = true;
    }
  }

  edicion(data: Empleado) {
    this.empleadoParaEdicion = data;
    this.empladoEdicionEvent.emit(this.empleadoParaEdicion);
    this.modalEdicionEvent.emit(this.verModalEdicion);
    if (this.verModalEdicion == true) {
      this.verModalEdicion = false;
    } else {
      this.verModalEdicion = true;
    }
  }
  mostrarModalEliminar(id: number) {
    if (this.verModalEliminar == false) {
      this.verModalEliminar = true;
    }
    this.idRegistro = id;
  }
  ocultarModalEliminar() {
    if (this.verModalEliminar) {
      this.verModalEliminar = false;
    }
  }
  eliminarRegistro() {
    this.servicio.eliminarEmpleado(this.idRegistro).subscribe((data) => {
      this.ngOnInit();
    });
    this.verModalEliminar = false;
  }
}
