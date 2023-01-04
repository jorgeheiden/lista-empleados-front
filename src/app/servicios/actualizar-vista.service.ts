import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActualizarVistaService {
  private vista = new Subject<void>()

  public setVista(){
    this.vista.next()
  }

  public getVista(){
    return this.vista.asObservable()
  }

}
