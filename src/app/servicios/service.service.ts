import { Empleado } from './../interfaces/empleado';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  //Metodo GET
  getEmplados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>('https://backend-lista-empleados-production.up.railway.app/api/empleados')
  }
  //Metodo POST
  nuevoEmpleado(empleado:Empleado): Observable<Empleado>{
    return this.http.post<Empleado>('https://backend-lista-empleados-production.up.railway.app/api/empleados', empleado)
  }
}