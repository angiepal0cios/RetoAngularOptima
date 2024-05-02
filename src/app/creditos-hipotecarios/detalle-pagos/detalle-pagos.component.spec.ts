import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePagosComponent } from './detalle-pagos.component';

describe('DetallePagosComponent', () => {
  let component: DetallePagosComponent;
  let fixture: ComponentFixture<DetallePagosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePagosComponent]
    });
    fixture = TestBed.createComponent(DetallePagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
