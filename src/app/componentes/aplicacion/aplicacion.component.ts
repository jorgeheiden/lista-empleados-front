import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado';

@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.scss']
})
export class AplicacionComponent implements OnInit {

  verModal!:boolean
  empleadoParaEdicion!:Empleado
  verModalEdicion!:boolean
  constructor() { }

  ngOnInit(): void {
  }

  modal(evento:boolean){
    this.verModal = evento
  }
  edicion(evento:Empleado){
    this.empleadoParaEdicion = evento
  }
  modalEdicion(evento:boolean){
    this.verModalEdicion = evento
  }
}
