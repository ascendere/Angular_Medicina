import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizarraComponent } from './pizarra.component';

describe('PizarraComponent', () => {
  let component: PizarraComponent;
  let fixture: ComponentFixture<PizarraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizarraComponent]
    });
    fixture = TestBed.createComponent(PizarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
