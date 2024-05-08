import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEntradaComponent } from './pagina-entrada.component';

describe('PaginaEntradaComponent', () => {
  let component: PaginaEntradaComponent;
  let fixture: ComponentFixture<PaginaEntradaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaEntradaComponent]
    });
    fixture = TestBed.createComponent(PaginaEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
