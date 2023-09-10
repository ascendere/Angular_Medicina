import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlosarioBrazoComponent } from './glosario-brazo.component';

describe('GlosarioBrazoComponent', () => {
  let component: GlosarioBrazoComponent;
  let fixture: ComponentFixture<GlosarioBrazoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlosarioBrazoComponent]
    });
    fixture = TestBed.createComponent(GlosarioBrazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
