import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarTopComponent } from './toolbar-top.component';

describe('ToolbarTopComponent', () => {
  let component: ToolbarTopComponent;
  let fixture: ComponentFixture<ToolbarTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarTopComponent]
    });
    fixture = TestBed.createComponent(ToolbarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
