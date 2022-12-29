import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEdicionComponent } from './modal-edicion.component';

describe('ModalEdicionComponent', () => {
  let component: ModalEdicionComponent;
  let fixture: ComponentFixture<ModalEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
