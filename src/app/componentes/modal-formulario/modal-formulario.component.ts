import { ActualizarVistaService } from './../../servicios/actualizar-vista.service';
import { ServiceService } from './../../servicios/service.service';
import { Empleado } from './../../interfaces/empleado';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-formulario',
  templateUrl: './modal-formulario.component.html',
  styleUrls: ['./modal-formulario.component.scss'],
})
export class ModalFormularioComponent implements OnInit {
  modal!: boolean;
  @Input() set verModal(valor: boolean) {
    if (valor == undefined) {
      this.modal = false;
    } else {
      this.modal = true;
    }
  }

  constructor(
    private servicio: ServiceService,
    private actualizarVistaService: ActualizarVistaService
  ) {}

  ngOnInit(): void {}

  nuevoEmpleadoForm = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    codigo: new FormControl(),
    fecha: new FormControl(),
    direccion: new FormControl(),
    telefono: new FormControl(),
    puesto: new FormControl(),
    estado: new FormControl(),
  });

  cerrarModal() {
    this.modal = false;
  }

  enviarDatos() {
    const empleado: Empleado = {
      codigo: this.nuevoEmpleadoForm.value.codigo,
      nombre: this.nuevoEmpleadoForm.value.nombre,
      apellido: this.nuevoEmpleadoForm.value.apellido,
      fecha_nacimiento: this.nuevoEmpleadoForm.value.fecha,
      direccion: this.nuevoEmpleadoForm.value.direccion,
      telefono: this.nuevoEmpleadoForm.value.telefono,
      puesto: this.nuevoEmpleadoForm.value.puesto,
      estado: this.nuevoEmpleadoForm.value.estado,
    };

    this.servicio.nuevoEmpleado(empleado).subscribe((data) => {
      console.log(data);
      this.actualizarVistaService.setVista();
    });

    this.nuevoEmpleadoForm.reset();
    this.cerrarModal();
  }
}
