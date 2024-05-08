import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBaralhosComponent } from './listar-baralhos.component';

describe('ListarBaralhosComponent', () => {
  let component: ListarBaralhosComponent;
  let fixture: ComponentFixture<ListarBaralhosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarBaralhosComponent]
    });
    fixture = TestBed.createComponent(ListarBaralhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
