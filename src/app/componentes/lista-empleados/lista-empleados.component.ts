import { Observable } from 'rxjs';
import { ServiceService } from './../../servicios/service.service';
import { Empleado } from './../../interfaces/empleado';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss']
})
export class ListaEmpleadosComponent implements OnInit {

  verModal:boolean = true
  @Output() verModalEvent = new EventEmitter<boolean>()
  empleadoParaEdicion!:Empleado
  @Output() empladoEdicionEvent = new EventEmitter<Empleado>()
  verModalEdicion:boolean = true
  @Output() modalEdicionEvent = new EventEmitter<boolean>()

  data:any = [
    {
    idempleados: 1,
    codigo: 2222,
    nombre: "jose",
    apellido: "perez",
    fecha_nacimiento: "1988-05-11T00:00:00.000Z",
    direccion: "juarez 2960",
    telefono: 11656512,
    puesto: "gerente",
    estado: "contratado"
  },
  {
    idempleados: 1,
    codigo: 3333,
    nombre: "Juan",
    apellido: "Lopez",
    fecha_nacimiento: "1988-05-11T00:00:00.000Z",
    direccion: "juarez 2960",
    telefono: 11656512,
    puesto: "gerente",
    estado: "contratado"
  }
]
  constructor(private servicio:ServiceService) { }

  ngOnInit(): void {
   //this.obtenerListaDeEmpleados()
  }

  obtenerListaDeEmpleados(){
    this.servicio.getEmplados().subscribe( data =>{
      console.log(data)
  
    })
  }

  modal(){
    this.verModalEvent.emit(this.verModal)
    if(this.verModal == true){
      this.verModal = false
    } else{
      this.verModal = true
    }
  }

  edicion(data:Empleado){
    this.empleadoParaEdicion = data
    this.empladoEdicionEvent.emit(this.empleadoParaEdicion)
    this.modalEdicionEvent.emit(this.verModalEdicion)
    if(this.verModalEdicion == true){
      this.verModalEdicion = false
    } else{
      this.verModalEdicion = true
    }
  }
}
