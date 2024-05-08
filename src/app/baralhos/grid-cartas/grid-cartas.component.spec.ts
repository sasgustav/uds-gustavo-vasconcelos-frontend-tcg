import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCartasComponent } from './grid-cartas.component';

describe('GridCartasComponent', () => {
  let component: GridCartasComponent;
  let fixture: ComponentFixture<GridCartasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridCartasComponent]
    });
    fixture = TestBed.createComponent(GridCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
