import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBaralhosCriadosComponent } from './ver-baralhos-criados.component';

describe('VerBaralhosCriadosComponent', () => {
  let component: VerBaralhosCriadosComponent;
  let fixture: ComponentFixture<VerBaralhosCriadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerBaralhosCriadosComponent]
    });
    fixture = TestBed.createComponent(VerBaralhosCriadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
