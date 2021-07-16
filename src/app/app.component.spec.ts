import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSliderModule,
  MatToolbarModule,
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationPlayer } from '@angular/animations';
import { HomeComponent } from './home/home.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsDemoComponent } from './home/reactive-forms-demo/reactive-forms-demo.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HomeComponent, ReactiveFormsDemoComponent],
      imports: [
        MatCardModule,
        MatButtonModule,
        ReactiveFormsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatInputModule,
        MatSliderModule,
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
