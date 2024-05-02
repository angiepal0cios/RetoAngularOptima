import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditosHipotecariosComponent } from './creditos-hipotecarios.component';

describe('CreditosHipotecariosComponent', () => {
  let component: CreditosHipotecariosComponent;
  let fixture: ComponentFixture<CreditosHipotecariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditosHipotecariosComponent]
    });
    fixture = TestBed.createComponent(CreditosHipotecariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
