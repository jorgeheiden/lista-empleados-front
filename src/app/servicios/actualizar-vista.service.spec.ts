import { TestBed } from '@angular/core/testing';

import { ActualizarVistaService } from './actualizar-vista.service';

describe('ActualizarVistaService', () => {
  let service: ActualizarVistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualizarVistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
