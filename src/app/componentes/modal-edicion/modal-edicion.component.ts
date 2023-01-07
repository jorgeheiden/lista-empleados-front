import { ActualizarVistaService } from './../../servicios/actualizar-vista.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/interfaces/empleado';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-modal-edicion',
  templateUrl: './modal-edicion.component.html',
  styleUrls: ['./modal-edicion.component.scss'],
})
export class ModalEdicionComponent implements OnInit {
  modal: boolean = false;
  empleado!: Empleado;
  id!: number;
  
  @Input() set empleadoParaEdicion(data: Empleado) {
    if (data) {
      
      this.edicionForm.setValue({
        nombre: data.nombre,
        apellido: data.apellido,
        codigo: data.codigo,
        fecha:  this.formatearFecha(data.fecha_nacimiento),
        direccion: data.direccion,
        telefono: data.telefono,
        puesto: data.puesto,
        estado: data.estado,
      });
      this.id = data.idempleados!;
    }
  }
  @Input() set verModalEdicion(data: boolean) {
    if (data == undefined) {
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

  edicionForm = new FormGroup({
    nombre: new FormControl("", [Validators.required]),
    apellido: new FormControl("", [Validators.required]),
    codigo: new FormControl(0, [Validators.required]),
    fecha: new FormControl("", [Validators.required]),
    direccion: new FormControl("", [Validators.required, Validators.minLength(3)]),
    telefono: new FormControl(0, [Validators.required]),
    puesto: new FormControl("", [Validators.required]),
    estado: new FormControl("", [Validators.required]),
  });

  ocultarModal() {
    this.modal = false;
  }
  enviarDatos() {
    this.empleado = {
      idempleados: this.id,
      codigo: this.edicionForm.value.codigo!,
      nombre: this.edicionForm.value.nombre!,
      apellido: this.edicionForm.value.apellido!,
      fecha_nacimiento: this.edicionForm.value.fecha!,
      direccion: this.edicionForm.value.direccion!,
      telefono: this.edicionForm.value.telefono!,
      puesto: this.edicionForm.value.puesto!,
      estado: this.edicionForm.value.estado!,
    };
    this.servicio.editarEmpleado(this.empleado).subscribe((data) => {
      console.log(data);
      this.actualizarVistaService.setVista();
    });

    this.ocultarModal();
  }

  formatearFecha(data: any) {
    const fecha = new Date(data);
    let año = fecha.getFullYear();
    let mes;
    let dia;
    if (fecha.getDate() < 10) {
      dia = '0' + (fecha.getDate() );
    } else {
      dia = (fecha.getDate() );
    }
    if (fecha.getMonth() < 10) {
      mes = '0' + (fecha.getMonth() + 1);
    } else {
      mes = (fecha.getMonth() + 1);
    }
    console.log(data)
    console.log(fecha)
    console.log(fecha.getDate())
    return año + '-' + mes + '-' + dia;
  }
}
