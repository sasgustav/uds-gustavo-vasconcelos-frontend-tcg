import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCartasComponent } from './listar-cartas.component';

describe('ListarCartasComponent', () => {
  let component: ListarCartasComponent;
  let fixture: ComponentFixture<ListarCartasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCartasComponent]
    });
    fixture = TestBed.createComponent(ListarCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
