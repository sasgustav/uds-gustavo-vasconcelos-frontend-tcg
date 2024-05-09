import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarConjuntosComponent } from './buscar-conjuntos.component';

describe('BuscarConjuntosComponent', () => {
  let component: BuscarConjuntosComponent;
  let fixture: ComponentFixture<BuscarConjuntosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarConjuntosComponent]
    });
    fixture = TestBed.createComponent(BuscarConjuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
