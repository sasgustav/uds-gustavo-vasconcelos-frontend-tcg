import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarBaralhoComponent } from './criar-baralho.component';

describe('CriarBaralhoComponent', () => {
  let component: CriarBaralhoComponent;
  let fixture: ComponentFixture<CriarBaralhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarBaralhoComponent]
    });
    fixture = TestBed.createComponent(CriarBaralhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
