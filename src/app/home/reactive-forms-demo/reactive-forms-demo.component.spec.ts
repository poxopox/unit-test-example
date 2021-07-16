import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsDemoComponent } from './reactive-forms-demo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ReactiveFormsDemoComponent', () => {
  let component: ReactiveFormsDemoComponent;
  let fixture: ComponentFixture<ReactiveFormsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormsDemoComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should condemn you for being too tall', () => {
    component.appFormGroup.get('height.feet').setValue(9);
    fixture.detectChanges();
    expect(component.heightFormGroup.errors).toEqual({ tooTall: true });
  });

  it('should have a method that allows the display of percent values', function () {
    expect(component.thumbDisplay(2)).toEqual('2%');
    expect(component.thumbDisplay(2.5)).toEqual('2.5%');
  });
});
