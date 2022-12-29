import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Empleado } from 'src/app/interfaces/empleado';

@Component({
  selector: 'app-modal-edicion',
  templateUrl: './modal-edicion.component.html',
  styleUrls: ['./modal-edicion.component.scss']
})
export class ModalEdicionComponent implements OnInit {
  modal:boolean = false

  @Input() set empleadoParaEdicion(data:Empleado){
    if(data){
      this.edicionForm.setValue({
      nombre: data.nombre,
      apellido: data.apellido,
      codigo : data.codigo,
      fecha : this.formatearFecha(data.fecha_nacimiento),
      direccion: data.direccion,
      telefono: data.telefono,
      puesto: data.puesto,
      estado: data.estado
      })
    }
  }
  @Input() set verModalEdicion(data:boolean){
    if(data == undefined){
      this.modal = false
    } else{
      this.modal = true
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  edicionForm = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    codigo : new FormControl(),
    fecha : new FormControl(),
    direccion: new FormControl(),
    telefono: new FormControl(),
    puesto: new FormControl(),
    estado: new FormControl()
  })

  ocultarModal(){
    this.modal = false
  }
  enviarDatos(){
    
    this.ocultarModal()
  }

  formatearFecha(data:any){
    const fecha = new Date()
    let año = fecha.getFullYear()
    let mes 
    let dia
    if(fecha.getDay() < 10){
      dia = "0" + fecha.getDay()
    } else{
      dia = fecha.getDay()
    }
    if(fecha.getMonth() < 10){
      mes = "0" + fecha.getMonth()
    } else{
      mes = fecha.getMonth()
    }
    return año + "-" + mes + "-" + dia
  }
  
}
