import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcomensViewComponent } from './icomens-view.component';

describe('IcomensViewComponent', () => {
  let component: IcomensViewComponent;
  let fixture: ComponentFixture<IcomensViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcomensViewComponent]
    });
    fixture = TestBed.createComponent(IcomensViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
