import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerConjuntosComponent } from './ver-conjuntos.component';

describe('VerConjuntosComponent', () => {
  let component: VerConjuntosComponent;
  let fixture: ComponentFixture<VerConjuntosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerConjuntosComponent]
    });
    fixture = TestBed.createComponent(VerConjuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
