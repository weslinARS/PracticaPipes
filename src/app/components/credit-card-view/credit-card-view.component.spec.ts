import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardViewComponent } from './credit-card-view.component';

describe('CreditCardViewComponent', () => {
  let component: CreditCardViewComponent;
  let fixture: ComponentFixture<CreditCardViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditCardViewComponent]
    });
    fixture = TestBed.createComponent(CreditCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
