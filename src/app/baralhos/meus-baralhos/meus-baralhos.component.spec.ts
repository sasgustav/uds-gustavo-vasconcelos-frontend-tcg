import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusBaralhosComponent } from './meus-baralhos.component';

describe('MeusBaralhosComponent', () => {
  let component: MeusBaralhosComponent;
  let fixture: ComponentFixture<MeusBaralhosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeusBaralhosComponent]
    });
    fixture = TestBed.createComponent(MeusBaralhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
