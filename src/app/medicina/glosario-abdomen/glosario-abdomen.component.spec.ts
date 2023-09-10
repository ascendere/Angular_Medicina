import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlosarioAbdomenComponent } from './glosario-abdomen.component';

describe('GlosarioAbdomenComponent', () => {
  let component: GlosarioAbdomenComponent;
  let fixture: ComponentFixture<GlosarioAbdomenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlosarioAbdomenComponent]
    });
    fixture = TestBed.createComponent(GlosarioAbdomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
